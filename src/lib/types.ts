import { MutableRefObject, PropsWithChildren } from "react";

type Conditionstype = {
  expression?: string | number;
  fallthrough?: boolean;
  enableMemo?: boolean;
};
type Conditiontype = { condition?: boolean | string | number; break?: boolean };

type Props<P = NonNullable<object>> = PropsWithChildren<{
  ref?: MutableRefObject<any>;
} & P>;

type SwitchComponents = ((props: Props<Conditionstype>) => JSX.Element) & {
  Case: React.MemoExoticComponent<(props: Props<Conditiontype>) => JSX.Element>;
  Default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
};

export {
  type Props,
  type Conditiontype,
  type Conditionstype,
  type SwitchComponents,
};
