import { isToday } from "date-fns";
import { currentProject } from "./addDOM";



export const projects = [];


export function getProjects(){
    //let arr = [];
        if(localStorage.length == 0){
            storeProjects("Default Project")
        }
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            projects.push(key); // Get the key
        }
        
    return projects;
}


export function storeProjects(projectName){

    localStorage.setItem(projectName,JSON.stringify([]));
}

export function storeTask(projectName,obj){
    let taskList = JSON.parse(localStorage.getItem(projectName));
    if (taskList === null) {
        taskList = [];
    }
    
    taskList.push(obj);
    console.log(taskList);
    localStorage.setItem(projectName,JSON.stringify(taskList));
}

export function taskFinder(taskId,currentProject){
    let objList = JSON.parse(localStorage.getItem(currentProject));
    console.log(objList);
    let obj = objList.find(task => task.id === taskId);
    return obj;

}


export function editTask(id,currentProject,name,time,date){
    let obj = taskFinder(id,currentProject);
    obj.name = name;
    obj.dueTime = time;
    obj.dueDate = date;
    let objList = JSON.parse(localStorage.getItem(currentProject));
    let objIndex = objList.findIndex(task => task.id === id);
    objList[objIndex] = obj;
    localStorage.setItem(currentProject,JSON.stringify(objList));
}


export function deleteTask(id,currentProject){
    let objList = JSON.parse(localStorage.getItem(currentProject));
    objList = objList.filter(task => task.id !== id);
    localStorage.setItem(currentProject,JSON.stringify(objList));
}


export function getAllTasks(){
    let allTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let taskList = JSON.parse(localStorage.getItem(key));
        for(let j = 0;j<taskList.length; j++){
            allTasks.push(taskList[j]);
        }


         // Get the key

    }
    return allTasks;
}


export function getImpTasks(){
    let impTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let taskList = JSON.parse(localStorage.getItem(key));
        for(let j = 0;j<taskList.length; j++){
            if(taskList[j].isChecked) {impTasks.push(taskList[j]);}
        }


         // Get the key

    }
    return impTasks;

}



export function getTodayTasks(){
    let todayTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let taskList = JSON.parse(localStorage.getItem(key));
        for(let j = 0;j<taskList.length; j++){
            if(isToday(taskList[j].dueDate)) {todayTasks.push(taskList[j]);}
        }


         // Get the key

    }
    return todayTasks;
}