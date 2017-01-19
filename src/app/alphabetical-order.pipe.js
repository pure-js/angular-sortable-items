"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/*
 * Raise the value exponentially
 * Takes an boolean argument that defaults to false.
 * Usage:
 *   {{ [{name: 'a'},{name: 'b'}] | alphabeticalOrder:false }}
 * Example:
 *   {{ [{name: 'a'},{name: 'b'}] | alphabeticalOrder:true }}
 *   formats to: 1024
*/
var AlphabeticalOrderPipe = (function () {
    function AlphabeticalOrderPipe() {
    }
    AlphabeticalOrderPipe.prototype.transform = function (arr, reverse) {
        return arr.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (reverse) {
                if (nameB < nameA) {
                    return -1;
                }
                if (nameB > nameA) {
                    return 1;
                }
                return 0;
            }
            else {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }
        });
    };
    return AlphabeticalOrderPipe;
}());
AlphabeticalOrderPipe = __decorate([
    core_1.Pipe({
        name: 'alphabeticalOrder'
    })
], AlphabeticalOrderPipe);
exports.AlphabeticalOrderPipe = AlphabeticalOrderPipe;
//# sourceMappingURL=alphabetical-order.pipe.js.map