let tasks = [];

const taskList = document.getElementById('task-list');
const form = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('desc');
const dueDateInput = document.getElementById('dueDate');

let editIndex = null;

function renderTasks() {
    taskList.innerHTML = ""; // clear before re-render
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('task-header');

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('task-title');
        titleSpan.textContent = task.title;

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('task-date');
        dateSpan.textContent = task.dueDate;

        headerDiv.appendChild(titleSpan);
        headerDiv.appendChild(dateSpan);

        const descPara = document.createElement('div');
        descPara.classList.add('task-desc');
        descPara.textContent = task.desc;

        // Buttons
        const btnRow = document.createElement('div');
        btnRow.style.marginTop = "8px";

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => {
            titleInput.value = task.title;
            descInput.value = task.desc;
            dueDateInput.value = task.dueDate;
            editIndex = index;
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            renderTasks();
        };

        btnRow.appendChild(editBtn);
        btnRow.appendChild(deleteBtn);

        taskDiv.appendChild(headerDiv);
        taskDiv.appendChild(descPara);
        taskDiv.appendChild(btnRow);

        taskList.appendChild(taskDiv);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = {
        title: titleInput.value.trim(),
        desc: descInput.value.trim(),
        dueDate: dueDateInput.value
    };

    if (!newTask.title) {
        alert("Title is required.");
        return;
    }

    if (editIndex !== null) {
        tasks[editIndex] = newTask;
        editIndex = null;
    } else {
        tasks.push(newTask);
    }

    form.reset();
    renderTasks();
});

renderTasks();
