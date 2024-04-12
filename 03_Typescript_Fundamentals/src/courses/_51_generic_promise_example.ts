export {};
/*------ generic promise example ------

A Promise in JavaScript (and thus TypeScript) is an object 
representing the eventual completion or failure of an 
asynchronous operation.
*/

async function someFunc(): Promise<string> {
  return `Hello `;
}

const result = someFunc();
