"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FlagPipe = (function () {
    function FlagPipe() {
    }
    FlagPipe.prototype.transform = function (arr, flags) {
        var findOne = function (haystack, arr) {
            return arr.some(function (value) {
                return haystack.indexOf(value) >= 0;
            });
        };
        return arr.filter(function (value) {
            return findOne(flags, value.flags);
        });
    };
    return FlagPipe;
}());
FlagPipe = __decorate([
    core_1.Pipe({
        name: 'flags'
    })
], FlagPipe);
exports.FlagPipe = FlagPipe;
//# sourceMappingURL=flags-filter.pipe.js.map