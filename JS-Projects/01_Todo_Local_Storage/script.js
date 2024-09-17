document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);

    //saved in local storage
    saveTasks();

    renderTasks(newTask);

    todoInput.value = ""; // clear input
    console.log(tasks);
  });

  // rendering an array
  function renderTasks(task) {
    console.log(task.text);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    // Apply completed class if task is already completed
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>`;

    li.addEventListener("click", (e) => {
      console.log("clicked");
      if (e.target.tagName === "BUTTON") return; // Avoid toggling on button click
      task.completed = !task.completed; // Toggle task completion
      li.classList.toggle("completed"); // Add or remove the 'completed' class
      saveTasks(); // Save tasks after change
    });

    // removing the tasks
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  // local storage function
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
