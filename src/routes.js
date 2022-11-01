import {
  MAIN_ROUTE,
  LOGIN_ROUTE,
  INT_PRINT,
  INT_PRINT_CALC,
  INT_PRINT_CUT,
  TODO_ROUTE,
  ADMIN_PANEL,
} from "./routeConst/routeConst";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import IntPrint from "./pages/IntPrint";
import IntPrintCalc from "./pages/calcs/IntPrintCalc";
import PrintCutCalc from "./pages/calcs/PrintCutCalc";
import TodoPage from "./pages/TodoPage";
import AdminPanel from "./pages/AdminPanel";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: INT_PRINT,
    Component: IntPrint,
  },
  {
    path: INT_PRINT_CALC,
    Component: IntPrintCalc,
  },
  {
    path: INT_PRINT_CUT,
    Component: PrintCutCalc,
  },
  {
    path: TODO_ROUTE,
    Component: TodoPage,
  },
  {
    path: ADMIN_PANEL,
    Component: AdminPanel,
  },
];
