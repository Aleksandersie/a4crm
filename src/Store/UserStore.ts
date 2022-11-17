const { makeAutoObservable } = require("mobx");

export interface IUser {
    email: string;
    password: string;
    alias: string;
    role: string;
}

export default class UserStore {
    private _isAuth: boolean;
    private _user: IUser;
    private _employees: [];
    private _selectedEmployees: {};
    constructor() {
        this._isAuth = false;
        this._user = <IUser>{};
        this._employees = [];
        this._selectedEmployees = {};
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
}
