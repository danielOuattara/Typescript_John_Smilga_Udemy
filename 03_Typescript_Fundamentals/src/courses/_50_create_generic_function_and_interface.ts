export {};
/*------ create generic function and interface ------*/

function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

function createBoolena(arg: boolean): boolean {
  return arg;
}

// Define a generic function
function genericCreated<T>(arg: T): T {
  return arg;
}

const someStringValue = genericCreated<string>("Hello World");
const someNumberValue = genericCreated<number>(2);

// Define a generic interface

interface IGenericInterface<T> {
  value: T;
  getValue(): T;
}

const genericString: IGenericInterface<string> = {
  value: `Hello`,
  getValue() {
    return this.value;
  },
};
