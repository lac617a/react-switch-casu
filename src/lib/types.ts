import { MutableRefObject, FunctionComponentElement } from "react";

type Conditionstype = { expression?: string | number };
type Conditiontype = { condition?: boolean | string | number };
type Common<P = any> = {
  ref?: MutableRefObject<any>;
} & P;

type Props<P = any> = {
  children: FunctionComponentElement<P> | JSX.Element[];
} & Common<P>;
type PropsOnlyOneChild<P = any> = {
  children: FunctionComponentElement<P>;
} & Common<P>;

type SwitchComponents = ((props: Props<Conditionstype>) => JSX.Element) & {
  Case: React.MemoExoticComponent<
    (props: PropsOnlyOneChild<Conditiontype>) => JSX.Element | null
  >;
  Default: React.MemoExoticComponent<
    (props: PropsOnlyOneChild) => JSX.Element | null
  >;
};

export {
  type Props,
  type Conditiontype,
  type Conditionstype,
  type SwitchComponents,
  type PropsOnlyOneChild,
};
