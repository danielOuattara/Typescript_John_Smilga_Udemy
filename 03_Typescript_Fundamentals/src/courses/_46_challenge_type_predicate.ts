export {};
/*------ challenge type predicate ------

A type predicate is a function whose return type is 
a special kind of type that can be used to narrow 
down types within conditional blocks. */

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

//-----------------------

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "John Doe", study: () => console.log(`student is studying`) }
    : { name: "John Doe", login: () => console.log(`user is studying`) };
};

const person = randomPerson();

console.log(person);

//------------------------------------

/* `isStudent` returns a predicate */

function isStudent(person: Person): person is Student {
  //   return "study" in person;
  // OR
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}

//-------------

const john: Student = {
  name: "John Doe",
  study() {
    console.log(`${this.name} is studying`);
  },
};
const marie: User = {
  name: "Marie Stuart",
  login() {
    console.log(`${this.name} is logging`);
  },
};

john.study();
marie.login();

//---------------

console.log(isStudent(john)); // true
console.log(isStudent(marie)); // false
