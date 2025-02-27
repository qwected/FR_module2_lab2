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
function calculateAverage(numbers) {
    var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    return numbers.length > 0 ? sum / numbers.length : 0;
}
function countInRange(matrix, min, max) {
    var count = 0;
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var value = row_1[_a];
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}
function formatTuple(tuple) {
    return "".concat(tuple[0], " - ").concat(tuple[2], " - ").concat(tuple[1]);
}
var OilType;
(function (OilType) {
    OilType["Slivochnoe"] = "\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435";
    OilType["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
})(OilType || (OilType = {}));
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("\u0418\u043C\u044F: ".concat(pet.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(pet.age, ", \u0417\u0432\u0443\u043A: ").concat(pet.speak()));
}
var myOilProduct = {
    type: OilType.Sunflower,
    brand: "Золотая семечка",
    volume: 5
};
var average = calculateAverage([1, 2, 3, 4, 5]);
console.log("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435: ".concat(average));
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var count = countInRange(matrix, 3, 6);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0435: ".concat(count));
var myTuple = ["Первая строка", "Вторая строка", 42];
console.log(formatTuple(myTuple));
console.log(OilType.Slivochnoe);
var myDog = new Dog();
var myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);
console.log(JSON.stringify(myOilProduct));
