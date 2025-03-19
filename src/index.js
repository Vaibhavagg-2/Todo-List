import './style.css';
import { addEventListener } from './addDOM';
import { projects, getProjects } from './storage';
import { updateProjectList } from './updateUI';

export function app() {
  getProjects();
  updateProjectList(projects);
  addEventListener();
}

app();
