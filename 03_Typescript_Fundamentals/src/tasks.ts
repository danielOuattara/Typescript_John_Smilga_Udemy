type TypeTask = {
  description: string;
  isCompleted: boolean;
};

const tasks: TypeTask[] = [];

const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;
const taskListElement = document.querySelector<HTMLUListElement>(".list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskLabel = formInput.value;
  if (taskLabel) {
    // add task to list
    // render tasks
    // update local storage

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});
