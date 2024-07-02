import './style.css';
import { addProject } from './addProject';
import { getTask } from './getData';
import { addTask } from './addTask';
import { createEditForm, displayAllTasks, updateTaskList ,displayTodayTasks} from './updateUI';
import { taskFinder } from './storage';
import { displayImpTasks } from './updateUI';

export let currentProject = "Default Project";


export function addEventListener(){

    addTaskListener();
    addProjectListener();
    selectedProject();

} 


function addTaskListener(){
    const task = document.querySelector('.task-btn')
    const taskModal = document.querySelector('#task-modal')
    const close_btn = document.querySelector("#task-modal .close-modal");
    const modalForm = document.querySelector('#taskModalForm');

    close_btn.addEventListener('click',()=>{
        taskModal.style.display="none";
    });


    task.addEventListener('click', () => {
        taskModal.style.display = 'flex';
      });

      // window.addEventListener('click', (event) => {
        //   if (event.target === modal) {
          //     taskModal.style.display = 'none';
        //   }
      // });
    
      modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
        taskModal.style.display = 'none';
      });
}



function addProjectListener(){
    const openModal = document.querySelector('.project-btn');
    const closeModal = document.querySelector('.project-close-modal');
    const modal = document.querySelector('#modal');
    const modalForm = document.querySelector('#projectModalForm');

    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
      });

    
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      modalForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        addProject();
        modal.style.display = 'none';
      })
}


export function selectedProject(){
    const projects = document.querySelector('.projects');
    projects.addEventListener('click',(e)=>{
        if(e.target && e.target.nodeName == "LI"){
            const items = document.querySelectorAll('.projects li');
            items.forEach(item => item.classList.remove('selected'));
            e.target.classList.add('selected');
            currentProject = e.target.textContent;
            updateTaskList(currentProject);
        }
    })
}



// function taskListDisplay(){
//     const projects = document.querySelector('.projects');
//     projects.addEventListener('click',(e)=>{
//         if(e.target && e.target.nodeName == "LI"){
//             const items = document.querySelectorAll('.projects li');
//             items.forEach(item => item.addEventListener());
//             e.target.classList.add('selected');
//             currentProject = e.target.textContent;
//         }
//     })
// }