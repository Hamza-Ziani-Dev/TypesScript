var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// tuple 
var data = [1, true, "Hamza", 2];
// Union 
var x;
// any 
var info;
// Enum
var days;
(function (days) {
    days[days["Mon"] = 1] = "Mon";
    days[days["Tur"] = 2] = "Tur";
    days[days["Fri"] = 3] = "Fri";
    days[days["Stu"] = 4] = "Stu";
})(days || (days = {}));
console.log(days.Mon);
// Object
var Person;
// Type Assertion
var y = 1;
var a = y;
var b = y;
// function 
function getUser(username) {
    return username;
}
// Class 
var Car = /** @class */ (function () {
    function Car(name, module) {
        this.name = name;
        this.module = module;
    }
    Car.prototype.info = function () {
        console.log("".concat(this.name, ": ").concat(this.module));
    };
    return Car;
}());
// object class 
var car1 = new Car("BMW", "2020");
car1.info();
// Inheritance
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(name, module, price) {
        var _this = _super.call(this, name, module) || this;
        _this.price = price;
        return _this;
    }
    return Camion;
}(Car));
var camion1 = new Camion("Toto", "2012", 29000);
