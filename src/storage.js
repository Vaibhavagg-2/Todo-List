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