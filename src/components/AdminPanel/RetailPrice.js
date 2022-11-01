import React from "react";
import { observer } from "mobx-react-lite";

const RetailPrice = observer(({ testProp }) => {
  return <div>{testProp}</div>;
});

export default RetailPrice;
