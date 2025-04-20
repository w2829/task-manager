// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Create a new task item
function createTaskItem(text) {
  const li = document.createElement("li");
  li.className = "task-item";
  li.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "✖";
  removeBtn.addEventListener("click", () => li.remove());

  li.appendChild(removeBtn);
  return li;
}

// Add task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Events
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});
