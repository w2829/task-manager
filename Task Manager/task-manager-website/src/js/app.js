// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add task function
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});
