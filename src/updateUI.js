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

    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i); // Get the key
    //     let value = JSON.parse(localStorage.getItem(key));

    // }

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