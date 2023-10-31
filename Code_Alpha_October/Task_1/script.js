document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <span class="delete">X</span>`;
        taskList.appendChild(li);

        taskInput.value = "";
    }
});
