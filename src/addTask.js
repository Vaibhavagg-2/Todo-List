import { currentProject } from "./addDOM";
import { getTask } from "./getData";
import { storeTask } from "./storage";


export function addTask(){
    let task = getTask();
    let projectName = currentProject;
    storeTask(projectName,task);
}

export function getAllTask(){
    
}