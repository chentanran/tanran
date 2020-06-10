var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.greet = function (message) {
        return this.name + " say: " + message;
    };
    __decorate([
        logProperty
    ], Persons.prototype, "name");
    __decorate([
        logMethod,
        __param(0, logParameter)
    ], Persons.prototype, "greet");
    Persons = __decorate([
        logClass
    ], Persons);
    return Persons;
}());
// 打印构造函数
function logClass(target) {
    console.log(target);
}
// 打印属性名
function logProperty(target, propertyKey) {
    console.log(propertyKey);
}
// 打印方法名
function logMethod(target, propertyKey, descriptor) {
    console.log(propertyKey);
}
// 打印参数位置
function logParameter(target, propertyKey, index) {
    console.log(index);
}
