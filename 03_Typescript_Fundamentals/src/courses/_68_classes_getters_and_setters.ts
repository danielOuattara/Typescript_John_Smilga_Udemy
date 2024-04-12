export {};
/*------ classes getters and setters ------*/

class Book {
  private _checkedOut: boolean = true;
  constructor(public readonly title: string, public author: string) {}

  get info() {
    return `${this.title} by ${this.author}`;
  }

  set checkedOut(checkedOut: boolean) {
    this._checkedOut = checkedOut;
  }

  get checkedOut() {
    return this._checkedOut;
  }
}

const butterfly = new Book("Butterfly", "John Doe");
console.log(butterfly);

console.log(butterfly.info);

console.log(butterfly.checkedOut);
butterfly.checkedOut = false;
console.log(butterfly.checkedOut);
