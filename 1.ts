function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return numbers.length > 0 ? sum / numbers.length : 0;
}

function countInRange(matrix: number[][], min: number, max: number): number {
    let count = 0;
    for (const row of matrix) {
        for (const value of row) {
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}

type MyTuple = [string, string, number];

function formatTuple(tuple: MyTuple): string {
    return `${tuple[0]} - ${tuple[2]} - ${tuple[1]}`;
}

enum OilType {
    Slivochnoe = "Сливочное",
    Sunflower = "Подсолнечное",
}

class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak(): string {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak(): string {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Имя: ${pet.name}, Возраст: ${pet.age}, Звук: ${pet.speak()}`);
}

type OilProduct = {
    type: OilType;
    brand: string;
    volume: number;
};

const myOilProduct: OilProduct = {
    type: OilType.Sunflower,
    brand: "Золотая семечка",
    volume: 5
};

const average = calculateAverage([1, 2, 3, 4, 5]);
console.log(`Среднее арифметическое: ${average}`);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const count = countInRange(matrix, 3, 6);
console.log(`Количество значений в интервале: ${count}`);

const myTuple: MyTuple = ["Первая строка", "Вторая строка", 42];
console.log(formatTuple(myTuple));

console.log(OilType.Slivochnoe);

const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);

console.log(JSON.stringify(myOilProduct));
