const { makeAutoObservable } = require("mobx");

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._employees = [];
        this._selectedEmployees = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
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
