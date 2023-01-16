import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./Store/UserStore";
import OrderStore from "./Store/OrderStore";
import PriceStore from "./Store/PriceStore";
import MaterialStore from "./Store/MaterialStore";
import CheckBoxStore from "./Store/CheckBoxStore";
import AdditionalStore from "./Store/AdditionalSrevices";
import ToDoStore from "./Store/ToDo";
import FinanceStore from "./Store/FinanceStore";
import "./app.scss";
import DigitalPrintStore from "./Store/DigitalPrintStore";
import DigitalPrintPriceStore from "./Store/DigitalPrintPriceStore";

interface IContext {
     user: any;
     order: any;
    // price: PriceStore;
     price: any;
     materialList: any;
     checkStore: any;
     AddService: any;
     toDoStore: any;
     financeStore: any;
     digitalStore: DigitalPrintStore;
     digitalPrintPrice: DigitalPrintPriceStore;
}

export const Context = React.createContext<IContext>(null);

export const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <Context.Provider
          value={{
               user: new UserStore(),
               order: new OrderStore(),
               price: new PriceStore(),
               materialList: new MaterialStore(),
               checkStore: new CheckBoxStore(),
               AddService: new AdditionalStore(),
               toDoStore: new ToDoStore(),
               financeStore: new FinanceStore(),
               digitalStore: new DigitalPrintStore(),
               digitalPrintPrice: new DigitalPrintPriceStore()
          }}
     >
          <React.StrictMode>
               <App />
          </React.StrictMode>
     </Context.Provider>
);
