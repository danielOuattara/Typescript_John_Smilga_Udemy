export {};
/*------ challenge discriminated unions and exhaustive 
check using the never type ------*/

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return (state += action.amount);

    case "decrement":
      return (state -= action.amount);

    default: {
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
      return 0;
    }
  }
}

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});

console.log("newState = ", newState);
