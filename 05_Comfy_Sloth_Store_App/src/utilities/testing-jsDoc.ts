/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);

//--------------------------------------------------

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
  greet(greetee: string = "stranger"): string {
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

//--------------------------------------------------

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
function calculateDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

//--------------------------------------------------

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

//--------------------------------------------------

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

//--------------------------------------------------
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
function getActiveEmployees(
  employees: {
    id: number;
    name: string;
    department: { id: number; name: string };
    isActive: boolean;
  }[],
): {
  id: number;
  name: string;
  department: { id: number; name: string };
  isActive: boolean;
}[] {
  return employees.filter((employee) => employee.isActive);
}

//--------------------------------------------------
