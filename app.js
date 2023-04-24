import {TasksServices} from "./services/TasksServices.js";

const taskListItem = document.getElementById('tasks');
const tasksServices = new TasksServices();




// On active ce block en cas d'utilisation de getTasks on utilisant le tableau
const tasks = tasksServices.getTasks();

for (const task of tasks) {
    displayTask(task);
}

// On active ce block en cas d'utilisation de getTasks on utilisant fetch
/*tasksServices.getTasks().then(data => displayTasksList(data.tasks));

const displayTasksList = (tasks) => {
    tasks.forEach((task => displayTask(task)))
}*/

function displayTask (task){
    const taske = `
      <div class="item" task-id = ${tasksServices.getIndexFromTable(task)}>
        <input type="checkbox">
        <p>${task}</p>
        <button class="deletButton">Supprimer</button>
      </div>
                `;
    taskListItem.innerHTML += taske;
}

const allButton = document.querySelectorAll('.deletButton');
allButton.forEach((button, index) => {
    button.addEventListener('click',() => {
        tasksServices.deletTask(index);
        button.parentNode.remove();
    });

});


