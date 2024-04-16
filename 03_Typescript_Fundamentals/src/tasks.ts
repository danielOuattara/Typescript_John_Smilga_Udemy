type TypeTask = {
  label: string;
  isCompleted: boolean;
};

const tasks: TypeTask[] = [];

const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;
const taskUlElement = document.querySelector<HTMLUListElement>(".list")!;

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
  return;
}

//-----
function renderTasks(task: TypeTask): void {
  const taskLiElement = document.createElement("li");
  taskLiElement.textContent = task.label;
  taskUlElement.appendChild(taskLiElement);
}
//-----
// function updateLocalStorage(task: TypeTask): void {
//   const taskInLocal = localStorage.getItem("tasks");
// }

//-----
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskLabel = formInput.value;
  if (taskLabel) {
    const task = { label: taskLabel, isCompleted: false };
    // add task to list
    addToTasks(task);

    // render tasks
    renderTasks(task);
    // update local storage

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});
