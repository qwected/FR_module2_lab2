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
// Задание 1
function findMinPositive(arr) {
    var minPositive = Infinity;
    var hasPositive = false;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num > 0 && num < minPositive) {
            minPositive = num;
            hasPositive = true;
        }
    }
    return hasPositive ? minPositive : null;
}
function createBooleanMatrix(matrix) {
    return matrix.map(function (row) { return row.map(function (element) { return element.length % 2 === 1; }); });
}
function sumOfDigits(n) {
    return n.toString().split('').reduce(function (acc, digit) { return acc + parseInt(digit); }, 0);
}
function areSumOfDigitsEqual(_a) {
    var num1 = _a[0], num2 = _a[1];
    return sumOfDigits(num1) === sumOfDigits(num2);
}
// Задание 3
var RNABases;
(function (RNABases) {
    RNABases["Adenine"] = "Adenine";
    RNABases["Guanine"] = "Guanine";
    RNABases["Cytosine"] = "Cytosine";
    RNABases["Uracil"] = "Uracil";
})(RNABases || (RNABases = {}));
console.log(RNABases.Adenine);
// Задание 4
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'какое-то животное';
        this.age = 1;
    }
    Pet.prototype.speak = function () {
        return "Я не умею разговаривать!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "Бобик";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Гав-гав!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Барсик';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Мяу!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age, ", Speak: ").concat(pet.speak()));
}
var myDog = new Dog();
var myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);
// Задание 5
var RNA = /** @class */ (function () {
    function RNA(base, sequenceLength, isCoding) {
        this.base = base;
        this.sequenceLength = sequenceLength;
        this.isCoding = isCoding;
    }
    return RNA;
}());
var myRNA = new RNA(RNABases.Adenine, 100, true);
console.log(JSON.stringify(myRNA, null, 2));
