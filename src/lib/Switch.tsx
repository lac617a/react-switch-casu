import React, { memo, Children, useEffect, useState, ReactNode } from "react";
import { Props, Conditionstype } from "./types";

import Case from "./Case";
import Default from "./Default";
import { pushItemsToArray } from "./utils";

const Switch = ({ expression, fallthrough, children }: Props<Conditionstype>) => {
  const [childrenToBeRendered, setChildrenToBeRendered] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (children && Array.isArray(children)) {
      const childrenArray = Children.toArray(children);
      let newChildrenArr: ReactNode[] | undefined = [];
      let defaultChildren: ReactNode[] | undefined = [];
      let expressionMatched = false;
      let breakReached = false;

      if (Array.isArray(childrenArray)) {
        // push cases which satisfies the expression to state
        childrenArray.forEach((child: any) => {
          if (Object.is(Case, child.type) && child.type.name === Case.name) {
            // handle case value match case
            const { condition } = child.props;
            const conditionResult = typeof condition === "boolean" && Boolean(condition);

            if (conditionResult) {
              expressionMatched = true;
            } else if (condition === expression) {
              expressionMatched = true;
            }
            // handle switch fall through
            if (expressionMatched && !breakReached) {
              newChildrenArr = pushItemsToArray(newChildrenArr, child.props.children)
            }
            // handle break
            if (expressionMatched) {
              if (fallthrough) {
                if (child.props.break) {
                  breakReached = true;
                }
              } else {
                breakReached = true;
              }
            }
          } else if (Object.is(Default, child.type) && child.type.name === Default.name) {
            defaultChildren = pushItemsToArray(defaultChildren, child.props.children)
          }
        });
        // handle default case
        if (!breakReached) {
          newChildrenArr = [...newChildrenArr, ...defaultChildren]
        }
        setChildrenToBeRendered(newChildrenArr);
      }
    }
  }, [children, expression]);

  return <>{childrenToBeRendered}</>;
};


Switch.displayName = "react-switch-casu";
Switch.propTypes = {
  children: function (props: any, propName: any, componentName: any) {
    const prop = props[propName]

    let error = null
    Children.forEach(prop, function (child) {
      if (![Case.name, Default.name].includes(child.type.name)) {
        error = new Error(`'${componentName}' children should be of type 'Case' or 'Default'.`);
      }
    })
    return error
  }
}

export default memo(Switch, (prevProps: any, nextProps: any) => {
  return (prevProps.expression === nextProps.expression && nextProps.enableMemo)
});