// ---------------------------
// Βασικές Μεταβλητές & Τύποι
// ---------------------------

console.log('Testing our first TypeScript file');

let myNumber: number = 1; // ✅ σωστό
// let wrongNumber: number = "text"; // ❌ Error: Type 'string' is not assignable to type 'number'


// ---------------------------
// Arrays
// ---------------------------

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((num: number) => {
    num = num + 1;
    console.log(num);
});

let booleanArray: boolean[] = [true, false, true];
console.log(`The booleanArray has length: ${booleanArray.length}`);  // Output: 3

// Array με πολλά είδη (union)
let mixedArray: (number | string | boolean)[] = [1, "apple", true];

// Array με any (όχι καλή πρακτική)
let mixedArrayAny: any[] = [1, "apple", true];
console.log(mixedArrayAny[1].toUpperCase()); // ✅ δουλεύει, αλλά δεν προστατεύει από λάθη τύπων


// ---------------------------
// Union Types & Type Aliases
// ---------------------------

function printId(id: string | number): void {
    console.log(`Your ID is: ${id}`);
}
printId(12345); // ✅

type ID = string | number;
function fetchUser(id: ID): void {
    console.log(`Fetching user with ID: ${id}`);
}
fetchUser("ABC123"); // ✅


// ---------------------------
// Unknown vs Any
// ---------------------------

function processValue(input: unknown): string {
    if (typeof input === 'string') {
        return `The value is a string: ${input}`;
    } else if (typeof input === 'number') {
        return `The value is a number: ${input}`;
    } else {
        return 'The value is of an unknown type';
    }
}
console.log(processValue('Hello, TypeScript!'));


// ---------------------------
// Objects
// ---------------------------

let carOne: { model: string; year: number } = { model: 'Evil Spirit', year: 2025 };
console.log(carOne);

let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

// Προαιρετικό property (price?)
let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
console.log(vegetables);

// Readonly properties
let vegetables2: { readonly name: string; readonly price?: number }[] = [
    { name: 'Tomato', price: 2 },
    { name: 'Potato', price: 1 },
    { name: 'Carrot' },
];

// Readonly array
let vegetables3: readonly { name: string; price?: number }[] = [
    { name: 'Tomato', price: 2 },
    { name: 'Potato', price: 1 },
    { name: 'Carrot' },
];


// ---------------------------
// Functions
// ---------------------------

// Default parameter
function calculateFinalScore(baseScore: number, deductions: number = 0): number {
    return baseScore - deductions;
}
console.log(calculateFinalScore(50, 10)); // 40
console.log(calculateFinalScore(50));     // 50

// Object parameter
function createStudent(student: { id: number; name: string }): void {
    console.log(`Welcome to the course, ${student.name}!`);
}
createStudent({ id: 1, name: "John" });


// ---------------------------
// Type Aliases for Objects
// ---------------------------

type UserInfo = {
    name: string;
    age: number;
    address: string;
};

function printUserInfo(user: UserInfo) {
    console.log(`User Info: Name: ${user.name}, Age: ${user.age}, Address: ${user.address}`);
}
printUserInfo({ name: 'Alice', age: 30, address: '123 Main St' });

type User = {
    name: string;
    age: number;
};

function getUserDetails(user: User): string {
    return `${user.name} (${user.age} years old)`;
}
console.log(getUserDetails({ name: "Alice", age: 30 })); // ✅


// ---------------------------
// Interfaces
// ---------------------------

interface UserWithAddress {
    name: string;
    age: number;
    address: string;
}

function describeUser(user: UserWithAddress): string {
    return `${user.name} (${user.age} years old) lives at ${user.address}`;
}

const userObj: UserWithAddress = { name: "Alice", age: 30, address: "123 Main St" };
console.log(describeUser(userObj)); // ✅


// Interface κληρονομικότητα
interface Address {
    city: string;
    country: string;
}

interface ExtendedUser extends Address {
    name: string;
    age: number;
}

const userExtended: ExtendedUser = {
    name: "Alice",
    age: 30,
    city: "New York",
    country: "USA",
};


// ---------------------------
// Tuples
// ---------------------------

let userTuple: [string, number] = ["Alice", 25];
console.log(userTuple[0]); // Alice
console.log(userTuple[1]); // 25

let personTuple: [string, number, boolean?] = ["Bob", 30]; // το boolean είναι optional
console.log(personTuple); // ["Bob", 30]

const coordinates: readonly [number, number] = [10, 20];
// coordinates[0] = 50; // ❌ Error: Cannot assign to readonly tuple


// ---------------------------
// Enums
// ---------------------------

// Αριθμητικό enum (default ξεκινά από 0)
enum Status {
    Pending,   // 0
    InProgress, // 1
    Completed,  // 2
}
console.log(Status.Pending);   // 0
console.log(Status.Completed); // 2

// Custom numeric values
enum OrderStatus {
    Pending = 1,
    Shipped = 5,
    Delivered = 10,
}
console.log(OrderStatus.Shipped); // 5

// String enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction.Up); // "UP"


// -------------------------------------------------
// ΣΗΜΕΙΩΣΗ: Τα παρακάτω ΔΕΝ υποστηρίζουν "<>"
// -------------------------------------------------
// 1. Απλές μεταβλητές: let myNumber: number = 1;
// 2. Συναρτήσεις: function fn(x: number): string {}
// 3. Object types μέσα σε type/interface (μένουν με ":")
// 4. Tuples: let user: [string, number] = ["Alice", 25];
// 5. Enums: enum MyEnum { A, B, C }
// -------------------------------------------------

console.log('Testing our first TypeScript file with <> style');


// ---------------------------
// Arrays με <>
// ---------------------------

let numbers: Array<number> = [1, 2, 3, 4, 5];
numbers.forEach((num: number) => {
    num = num + 1;
    console.log(num);
});

let booleanArray: Array<boolean> = [true, false, true];
console.log(`The booleanArray has length: ${booleanArray.length}`);

let mixedArray: Array<number | string | boolean> = [1, "apple", true];

let mixedArrayAny: Array<any> = [1, "apple", true];
console.log(mixedArrayAny[1].toUpperCase());


// ---------------------------
// Objects σε Arrays με <>
// ---------------------------

let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

let vegetables: Array<{ name: string; price?: number }> = [tomato, potato, carrot];
console.log(vegetables);

let vegetables2: Array<{ readonly name: string; readonly price?: number }> = [
    { name: 'Tomato', price: 2 },
    { name: 'Potato', price: 1 },
    { name: 'Carrot' },
];

let vegetables3: ReadonlyArray<{ name: string; price?: number }> = [
    { name: 'Tomato', price: 2 },
    { name: 'Potato', price: 1 },
    { name: 'Carrot' },
];


