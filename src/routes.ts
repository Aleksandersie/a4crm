import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    INT_PRINT,
    INT_PRINT_CALC,
    INT_PRINT_CUT,
    TODO_ROUTE,
    ADMIN_PANEL,
    ORDER_PAGE_ROUTE,
    FINANCE_PAGE,
    USER_INFO_PAGE,
    EDIT_RETAIL_PRICE_PAGE,
} from "./routeConst/routeConst";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import IntPrint from "./pages/IntPrint";
import IntPrintCalc from "./pages/calcs/IntPrintCalc";
import PrintCutCalc from "./pages/calcs/PrintCutCalc";
import TodoPage from "./pages/TodoPage";
import AdminPanel from "./pages/AdminPanel";
import OrderPage from "./pages/OrderPage";
import FinancePage from "./pages/FinancePage";
import UserInfoPage from "./pages/UserInfoPage";
import EditRetailPricePage from "./pages/EditRetailPricePage";

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
    {
        path: ORDER_PAGE_ROUTE,
        Component: OrderPage,
    },
    {
        path: FINANCE_PAGE,
        Component: FinancePage,
    },
    {
        path: USER_INFO_PAGE + "/:id",
        Component: UserInfoPage,
    },
    {
        path: EDIT_RETAIL_PRICE_PAGE,
        Component: EditRetailPricePage,
    },
];
