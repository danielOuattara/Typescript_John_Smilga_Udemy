# JavaScript/TypeScript Docstrings

In JavaScript and TypeScript, documentation comments are written
using JSDoc syntax. This is similar to docstrings in Python and
Java's Javadoc, and it helps generate documentation automatically
and provides in-editor support.

##  Basic Syntax

JSDoc comments are multi-line comments that start with `/**` and
end with `*/`.The content between these symbols is the documentation
text.

### Here's a simple example

```js
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}
```

## Common JSDoc Tags

1. @param: Describes a function parameter.\
Syntax: @param {Type} parameterName - Description

2. @returns or @return: Describes the return value of a function.\
Syntax: @returns {Type} Description

3. @type: Describes the type of a variable or property.\
Syntax: @type {Type}

4. @typedef: Declares a complex type definition.\
Syntax: @typedef {Object} TypeName

5. @property: Describes a property of an object.\
Syntax: @property {Type} propertyName - Description

6. @example: Provides an example of how to use a function or method.\
Syntax: @example Code

7. @see: Provides a reference to more information.\
Syntax: @see URL or reference

8. @deprecated: Indicates that a feature or function should not be used anymore.\
Syntax: @deprecated Description

### Example with Multiple Tags

Here's a more detailed example with a class in TypeScript:

```ts

/**

* Class representing a person.
 */
class Person {
    /**
  * Create a person.
  * @param {string} name - The name of the person.
  * @param {number} age - The age of the person.
     */
    constructor(public name: string, public age: number) {}

    /**
  * Greet someone.
  * @param {string} [greetee='stranger'] - The name of the person to greet.
  * @returns {string} A greeting message.
  * @example
  * const person = new Person('Alice', 30);
  * console.log(person.greet('Bob')); // Hello, Bob!
     */
    greet(greetee: string = 'stranger'): string {
        return `Hello, ${greetee}!`;
    }

    /**
  * @deprecated Use {@link greet} instead.
  * @param {string} greetee - The name of the person to greet.
     */
    greetOld(greetee: string): void {
        console.log(`Hi, ${greetee}.`);
    }
}
```

## Advanced JSDoc Usage

### Using @typedef and @property

**@typedef** is useful for defining custom types, especially for complex
objects. You can define a type once and then use it throughout your
documentation.

```ts
/**

* A point in 2D space.
* @typedef {Object} Point
* @property {number} x - The x-coordinate.
* @property {number} y - The y-coordinate.
 */

/**

* Calculates the distance between two points.
* @param {Point} p1 - The first point.
* @param {Point} p2 - The second point.
* @returns {number} The distance between the points.
 */
function calculateDistance(p1: {x: number, y: number}, p2: {x: number, y: number}): number {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
```

###  Documenting Generics

TypeScript's support for generics can also be documented with JSDoc.

```ts
/**

* A stack data structure.
* @template T
 */
class Stack<T> {
    private items: T[] = [];

    /**
  * Pushes an item onto the stack.
  * @param {T} item - The item to push.
     */
    push(item: T): void {
        this.items.push(item);
    }

    /**
  * Pops an item off the stack.
  * @returns {T | undefined} The popped item or undefined if the stack is empty.
     */
    pop(): T | undefined {
        return this.items.pop();
    }
}
```

### Asynchronous Functions

For asynchronous functions, you can document the return type as a Promise.

```ts
/**

* Fetches data from an API.
* @async
* @param {string} url - The URL to fetch data from.
* @returns {Promise<any>} The data from the API.
 */
async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
}
```

## Practical Usage and Benefits

1. **IDE Support:** Most modern IDEs, like Visual Studio Code and WebStorm,
   provide autocomplete suggestions, type checking, and inline documentation
   tooltips based on JSDoc comments. This enhances the developer experience
   and reduces the likelihood of bugs.

2. **Automatic Documentation Generation:** Tools like JSDoc can automatically
   generate HTML documentation from your comments, similar to Java's Javadoc.

3. **Code Readability:** Well-documented code is easier to read and understand,
   especially for new developers joining a project or for open-source contributions.

4. **Type Safety in JavaScript:** While TypeScript already provides static typing,
   using JSDoc in JavaScript can simulate similar benefits by providing developers
   with type information without fully migrating to TypeScript.

## Example with Complex Objects

Consider a scenario with more complex data structures and type definitions:

```ts
/**

* An employee record.
* @typedef {Object} Employee
* @property {number} id - The employee's ID.
* @property {string} name - The employee's name.
* @property {Department} department - The employee's department.
* @property {boolean} isActive - Whether the employee is currently active.
 */

/**

* A department within a company.
* @typedef {Object} Department
* @property {number} id - The department ID.
* @property {string} name - The department name.
 */

/**

* Get active employees from a list.
* @param {Employee[]} employees - The list of employees.
* @returns {Employee[]} The list of active employees.
 */
function getActiveEmployees(employees: {id: number, name: string, department: {id: number, name: string}, isActive: boolean}[]): {id: number, name: string, department: {id: number, name: string}, isActive: boolean}[] {
    return employees.filter(employee => employee.isActive);
}
```

##  Tools for Generating and Viewing Documentation

- **JSDoc:** The standard tool for generating HTML documentation from JSDoc comments.

- **TypeDoc:** A documentation generator specifically for TypeScript that supports more
advanced TypeScript features like interfaces and generics.

- **VSCode Extensions:**

  - Document This: Automatically generates JSDoc comments based on the function signature.
  - JSDoc Live Preview: Allows you to preview JSDoc comments inline.

##  Conclusion

Using docstrings in JavaScript and TypeScript is an effective way to ensure
your code is self-explanatory and maintainable. It helps both current and
future developers understand the logic and purpose behind your code.
