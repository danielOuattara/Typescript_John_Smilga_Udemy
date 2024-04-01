export {};

/*--- function challenge ---*/

function processInput(
  input: string | number,
  config: { reverse: boolean } = { reverse: false },
): string | number {
  if (typeof input === "number") return input ** 2;

  return config.reverse
    ? input.toUpperCase().split("").reverse().join("")
    : input.toUpperCase();
}

console.log(processInput(10)); // Output: 100
console.log(processInput("Hello")); // Output: HELLO
console.log(processInput("Hello", { reverse: true })); // Output: OLLEH
