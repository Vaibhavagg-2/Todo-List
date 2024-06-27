import './style.css';
import { addEventListener } from './addDOM';
import { projects,getProjects,storeProjects } from './storage';
import { updateProjectList } from './updateUI';


function app(){
  getProjects();
  updateProjectList(projects);
  addEventListener();
}

app();
