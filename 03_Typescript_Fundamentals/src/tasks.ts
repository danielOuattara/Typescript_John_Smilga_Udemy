type TypeTask = {
  label: string;
  isCompleted: boolean;
};

const tasks: TypeTask[] = [];

const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;
const taskListElement = document.querySelector<HTMLUListElement>(".list");

//--------------------------------
// just for reference on event type definition
// function createTask(event: SubmitEvent) {
//   event.preventDefault();
//   const taskLabel = formInput.value;
//   if (taskLabel) {
//     // add task to list
//     // render tasks
//     // update local storage

//     formInput.value = "";
//     return;
//   }
//   alert("Please enter a task description");
// }
// taskForm.addEventListener("submit", createTask);

//--------------------------------

function addToTasks(task: TypeTask): void {
  tasks.push(task);
  console.log(tasks);
  return;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskLabel = formInput.value;
  if (taskLabel) {
    // add task to list
    addToTasks({ label: taskLabel, isCompleted: false });

    // render tasks
    // update local storage

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});
