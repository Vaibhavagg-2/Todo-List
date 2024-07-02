import { currentProject } from "./addDOM";

import { editTask,deleteTask, getAllTasks , getImpTasks,getTodayTasks} from "./storage";


export function updateProjectList(arr){
    const projectList = document.querySelector('.projects');

    projectList.innerHTML = " ";
    arr.forEach(name => {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        projectList.appendChild(listItem);
    });

}



export function updateTaskList(projectName){
    const container = document.querySelector('.taskList');
    container.innerHTML = ""


    let value = JSON.parse(localStorage.getItem(projectName));

    console.log(value);


    value.forEach(task => {
        const taskCard = document.createElement('div');
        const lessDetail = document.createElement('div');

        lessDetail.classList.add('lessDetail')
        taskCard.classList.add('task');
        console.log(task.id);
        taskCard.setAttribute('id',task.id);

        const completeCheck = document.createElement('input');
        completeCheck.type = 'checkbox';

        const description = document.createElement('h2');
        description.textContent = task.name;

        const importantIndicator = document.createElement('input');
        importantIndicator.type = 'checkbox';


        if(task.isChecked){
            taskCard.classList.add('important');
        }


        // const importantCheck = document.createElement('')
        lessDetail.appendChild(completeCheck);
        lessDetail.appendChild(description);
        lessDetail.appendChild(importantIndicator);
        taskCard.appendChild(lessDetail);
        container.appendChild(taskCard);
    })


}


export function createEditForm(task){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';


    const NameContainer = document.createElement('div');
    NameContainer.classList.add('editContainer')
    const NameLabel = document.createElement('div');
    NameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = task.name || '';
    nameInput.placeholder = 'Task Name';
    nameInput.className = 'task-name';
    NameContainer.appendChild(NameLabel);
    NameContainer.appendChild(nameInput);


    const dateContainer = document.createElement('div');
    dateContainer.classList.add('editContainer')
    const dateLabel = document.createElement('div');
    dateLabel.textContent = 'Date';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = task.dueDate || '';
    dateInput.className = 'task-date';
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);


    const timeContainer = document.createElement('div');
    timeContainer.classList.add('editContainer')
    const timeLabel = document.createElement('div');
    timeLabel.textContent = 'Time';
    const timeInput = document.createElement('input');
    timeInput.type = 'time';
    timeInput.value = task.dueTime || '';
    timeInput.className = 'task-time';
    timeContainer.appendChild(timeLabel);
    timeContainer.appendChild(timeInput);

    const importantDiv = document.createElement('div');
    importantDiv.className = 'task-important';


    
    const importantCheckbox = document.createElement('input');
    importantCheckbox.type = 'checkbox';
    importantCheckbox.checked = task.important || false;
    importantCheckbox.id = `important-${task.id}`;

    const importantLabel = document.createElement('label');
    importantLabel.htmlFor = `important-${task.id}`;
    importantLabel.textContent = 'Important';

    importantDiv.appendChild(importantCheckbox);
    importantDiv.appendChild(importantLabel);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'task-edit';
    editButton.onclick = () => editTask(task.id,currentProject,nameInput.value,timeInput.value,dateInput.value);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'task-delete';
    deleteButton.onclick = () => {deleteTask(task.id,currentProject);
        updateTaskList(currentProject);
    }

    taskDiv.appendChild(NameContainer);
    taskDiv.appendChild(dateContainer);
    taskDiv.appendChild(timeContainer);
    taskDiv.appendChild(importantDiv);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);

    return taskDiv;

}


function displayTaskArray(taskArr){

    const container = document.querySelector('.taskList');
    container.innerHTML = ""

    taskArr.forEach(task => {
        const taskCard = document.createElement('div');
        const lessDetail = document.createElement('div');

        lessDetail.classList.add('lessDetail')
        taskCard.classList.add('task');
        taskCard.setAttribute('id',task.id);

        const completeCheck = document.createElement('input');
        completeCheck.type = 'checkbox';

        const description = document.createElement('h2');
        description.textContent = task.name;


        if(task.isChecked){
            taskCard.classList.add('important');
        }


        // const importantCheck = document.createElement('')
        lessDetail.appendChild(completeCheck);
        lessDetail.appendChild(description);
        // lessDetail.appendChild(importantIndicator);
        taskCard.appendChild(lessDetail);
        container.appendChild(taskCard);
    })





}



export function displayAllTasks(){
    let allTasks = getAllTasks();

    displayTaskArray(allTasks);


}


export function displayImpTasks(){
    let impTasks = getImpTasks();

    displayTaskArray(impTasks);
}


export function displayTodayTasks(){
    let todayTasks = getTodayTasks();
    displayTaskArray(todayTasks);
}