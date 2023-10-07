import { Children, useId, ReactElement, ReactNode, cloneElement } from "react";
import { Props, Conditiontype, Conditionstype, PropsOnlyOneChild } from "./types";

const generateKey = (prexi: string) => {
  return `${prexi}_${new Date().getTime()}`;
}

function Switch({ expression, children }: Props<Conditionstype>) {
  let matchChild: ReactNode = null;
  let defaultCase: ReactNode = null;

  const mapperChildrens = (validated?: boolean) =>
    Children.forEach(children, (child: ReactElement<Conditiontype & Conditionstype>) => {
      const keys = { key: generateKey(useId()) };
      if (!matchChild && child.type === Case) {
        const { condition } = child.props;

        const conditionResult = validated
          ? typeof condition === "boolean" && Boolean(condition)
          : expression === condition;

        if (conditionResult) {
          matchChild = cloneElement(child, keys);
        }
      } else if (!defaultCase && child.type === Default) {
        defaultCase = cloneElement(child, keys);
      }
    });

  if (typeof expression !== "undefined") mapperChildrens();
  else mapperChildrens(true);

  return matchChild ?? defaultCase;
};

function Case({ children }: PropsOnlyOneChild<Conditiontype>) {
  return Children.only(children);
};
function Default({ children }: PropsOnlyOneChild) {
  return Children.only(children);
};

export {
  Switch,
  Case,
  Default
};


Switch.displayName = "react-switch-casu";
Switch.propTypes = {
  children: function (props: any, propName: any, componentName: any) {
    const prop = props[propName]

    let error = null
    const onlyOneDefault = [];
    Children.forEach(prop, function (child) {
      if ([Default].includes(child.type)) onlyOneDefault.push(child.type);
      if (onlyOneDefault.length > 1) {
        error = new Error(`'${componentName}' Only one 'Default' type element is acceptable.`);
      }
      if (![Case, Default].includes(child.type)) {
        error = new Error(`'${componentName}' children should be of type 'Case' or 'Default'.`);
      }
    })
    return error
  }
}