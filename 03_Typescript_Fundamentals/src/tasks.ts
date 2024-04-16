type TypeTask = {
  label: string;
  isCompleted: boolean;
};

//-----
const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;
const taskUlElement = document.querySelector<HTMLUListElement>(".list")!;

//----- Load tasks from localStorage
function loadTasks(): TypeTask[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

//-----
const tasks: TypeTask[] = loadTasks();

//-----
function addToTasks(task: TypeTask): void {
  tasks.push(task);
  return;
}

//-----
function updateLocalStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//-----
function renderTasks(task: TypeTask): void {
  const taskLiElement = document.createElement("li");
  taskLiElement.textContent = task.label;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateLocalStorage();
  });

  taskLiElement.appendChild(taskCheckbox);
  taskUlElement.appendChild(taskLiElement);
}

tasks.forEach(renderTasks);

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
    updateLocalStorage();

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});
