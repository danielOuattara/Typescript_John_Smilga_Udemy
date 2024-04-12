export {};
/*------ generic multiple types------*/

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

console.log(pair<string, number>(`One`, 1));

//

let result = pair<number, string>(123, "Hello");
console.log(result); // Output: [123, "Hello"]
