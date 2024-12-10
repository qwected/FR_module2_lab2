// Задание 1
function findMinPositive(arr: number[]): number | null {
    let minPositive = Infinity;
    let hasPositive = false;

    for (let num of arr) {
        if (num > 0 && num < minPositive) {
            minPositive = num;
            hasPositive = true;
        }
    }

    return hasPositive ? minPositive : null;
}

function createBooleanMatrix(matrix: string[][]): boolean[][] {
    return matrix.map(row => row.map(element => element.length % 2 === 1));
}

// Задание 2
type NumberTuple = [number, number];

function sumOfDigits(n: number): number {
    return n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

function areSumOfDigitsEqual([num1, num2]: NumberTuple): boolean {
    return sumOfDigits(num1) === sumOfDigits(num2);
}

// Задание 3
enum RNABases {
    Adenine = 'Adenine',
    Guanine = 'Guanine',
    Cytosine = 'Cytosine',
    Uracil = 'Uracil'
}

console.log(RNABases.Adenine);

// Задание 4
class Pet {
    name: string = 'какое-то животное';
    age: number = 1;

    speak() {
        return "Я не умею разговаривать!";
    }
}

class Dog extends Pet {
    label: string = "Бобик";
    age: number = 8;

    speak() {
        return "Гав-гав!";
    }
}

class Cat extends Pet {
    name: string = 'Барсик';
    age: number = 2;

    speak() {
        return "Мяу!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}

const myDog = new Dog();
const myCat = new Cat();

printPetInfo(myDog);
printPetInfo(myCat);

// Задание 5
class RNA {
    base: RNABases;
    sequenceLength: number;
    isCoding: boolean;

    constructor(base: RNABases, sequenceLength: number, isCoding: boolean) {
        this.base = base;
        this.sequenceLength = sequenceLength;
        this.isCoding = isCoding;
    }
}

const myRNA = new RNA(RNABases.Adenine, 100, true);
console.log(JSON.stringify(myRNA, null, 2));
