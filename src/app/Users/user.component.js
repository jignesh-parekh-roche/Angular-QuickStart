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
var user_list_service_1 = require("./user-list.service");
var UsersComponent = (function () {
    function UsersComponent(userListService) {
        this.userListService = userListService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('--> users:', this.users);
        this.userListService.getUsers().subscribe(function (users) {
            console.log('--> Inside the user.component > ngOnInit() > getUsers() call', users);
            _this.users = users;
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users-list',
        templateUrl: './users.html',
        providers: [user_list_service_1.UserListService]
    }),
    __metadata("design:paramtypes", [user_list_service_1.UserListService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=user.component.js.map