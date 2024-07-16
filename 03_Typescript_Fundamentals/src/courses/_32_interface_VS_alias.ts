export {};

/**
 * ------- interface VS alias ------- 

* A type alias is a way to give a name to a type. 
* It can represent primitive types, union types, 
* intersection types, tuples, and any other types. 

* Once defined, the alias can be used anywhere in 
* place of the actual type. 
* */

type TPerson = {
  name: string;
  age: number;
};

let john: TPerson = { name: "John", age: 30 };

/**
 * An interface is a way to define a contract for a
 * certain structure of an object. */

interface IPerson {
  name: string;
  age: number;
}

let john2: IPerson = { name: "John", age: 30 };

/**
 * Key Differences: Type aliases can represent primitive
 * types, union types, intersection types, tuples, etc.,
 * while interfaces are primarily used to represent the
 * shape of an object. */

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = "up";

/**
 * Interfaces can be merged using declaration merging. 
 * (if you define an interface with the same name more 
 * than once, TypeScript will merge their definitions.)
 * 
 * Type aliases cannot be merged in this way.
 
 * Interfaces can be implemented by classes, while type aliases cannot.
 *
 * Type aliases can use computed properties, while interfaces cannot.

*/

interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let john3 = new Employee("John");
john3.greet(); // Outputs: Hello, my name is John

const propName = "age";

// computed properties
type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
