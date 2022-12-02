import { runInThisContext } from "vm";

const { makeAutoObservable } = require("mobx");
export interface getUser{
    count: number,
    rows: IUser []

}

export interface IUser {
    email: string;
    password: string;
    alias: string;
    role: string;
    priceList: string;
    id: number;
}

export default class UserStore {
    private _isAuth: boolean;
    private _user: IUser;
    private _employees: [];
    private _selectedEmployees: {};
    private _customers: IUser[];
    private _selectedCustomer: IUser;
    private _userList: getUser[]; //User list by category in admin panel
    constructor() {
        this._isAuth = false;
        this._user = <IUser>{};
        this._employees = [];
        this._selectedEmployees = {};
        this._customers = [];
        this._selectedCustomer = <IUser>{};
        this._userList = [];
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }
    setUser(user: IUser) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }

    setEmployees(employees) {
        this._employees = employees;
    }
    get employees() {
        return this._employees;
    }
    setSelectedEmployees(employees) {
        this._selectedEmployees = employees;
    }
    get selectedEmployees() {
        return this._selectedEmployees;
    }
    setCustomers(customers: IUser[]) {
        this._customers = customers;
    }
    get customers() {
        return this._customers;
    }
    setSelectedCustomer(customer: IUser) {
        this._selectedCustomer = customer;
    }
    get selectedCustomer() {
        return this._selectedCustomer;
    }
    setUserList(userList: getUser[]) {
        this._userList = userList;
    }
    get userList() {
        return this._userList;
    }
}
