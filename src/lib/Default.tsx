import React from "react";
import { Props } from "./types";
import { generateUuid } from "./utils";

const Case = (props: Props) => {
  return (
    <React.Fragment key={generateUuid()}>
      {props.children}
    </React.Fragment>
  );
};

export default Case;