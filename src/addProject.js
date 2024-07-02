import { getProject } from "./getData"
import { projects,getProjects,storeProjects} from "./storage";
import { updateProjectList } from "./updateUI";

export function addProject(){

    let projectArray = projects;
    let projectName = getProject();
    if(!projects.includes(projectName)){
        projectArray.push(projectName);
        storeProjects(projectName);
        console.log(projectArray);
        updateProjectList(projectArray);
    }

}