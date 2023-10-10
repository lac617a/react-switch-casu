import React from "react";
import { generateUuid } from "./utils";
import { Conditiontype, Props } from "./types";

const Case = (props: Props<Conditiontype>) => {
  return (
    <React.Fragment key={generateUuid()}>
      {props.children}
    </React.Fragment>
  );
};

export default Case;