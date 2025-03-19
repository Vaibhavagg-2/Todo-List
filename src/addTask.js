import { getCurrentProject } from "./addDOM";
import { getTask } from "./getData";
import { storeTask } from "./storage";


export function addTask(){
    let task = getTask();
    let projectName = getCurrentProject();
    storeTask(projectName,task);
}

export function getAllTask(){
    
}