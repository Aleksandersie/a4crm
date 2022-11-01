import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const OrderTotal = observer(() => {
  const { order } = useContext(Context);
  const [totalCost, setTotalCost] = useState("0");
  useEffect(() => {
    setTotalCost(
      order.order.reduce(function (sum, order) {
        return sum + order.totalCost;
      }, 0)
    );
  }, [order.order]);
  return <div>Итого в заказе:{totalCost} рублей</div>;
});

export default OrderTotal;
