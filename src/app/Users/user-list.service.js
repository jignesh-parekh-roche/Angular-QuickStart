"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/find");
require("rxjs/add/operator/concatMap");
require("rxjs/add/operator/concatMapTo");
require("rxjs/add/operator/concatAll");
require("rxjs/add/observable/from");
var UserListService = (function () {
    function UserListService(http) {
        this.http = http;
    }
    UserListService.prototype.getUsers = function () {
        return this.http.get('api/users')
            .map(function (response) { return response.json().data; });
        // this.http.get('/assets/data/user-list.json')
        // 	.map(res => res.json().data as User[])
        // 	.subscribe(users => {
        // 		console.log('--> Inside getUsers() > loading data from JSON file.', users);
        // 	});
    };
    UserListService.prototype.getEvenNumbers = function () {
        return Observable_1.Observable.of(1, 2, 3, 4)
            .map(function (x) { return x + 1; })
            .filter(function (x) { return (x % 2) === 0; });
    };
    UserListService.prototype.getUserById = function (id) {
        return this.http.get('api/users')
            .map(function (response) { return response.json().data.find(function (user) { return user.id === id; }); });
    };
    UserListService.prototype.getUserByFirstname = function (firstName) {
        return this.http.get('api/users')
            .map(function (response) { return response.json().data
            .filter(function (user) { return user.firstName.startsWith(firstName); }); });
    };
    UserListService.prototype.getUserByLastname = function (lastName) {
        return this.http.get('api/users')
            .map(function (response) { return response.json().data
            .filter(function (user) { return user.lastName.startsWith(lastName); }); });
    };
    UserListService.prototype.getUsersByAge = function (age) {
        return this.http.get('api/users')
            .map(function (response) { return response.json().data
            .filter(function (user) { return user.age > age; }); });
    };
    return UserListService;
}());
UserListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserListService);
exports.UserListService = UserListService;
//# sourceMappingURL=user-list.service.js.map