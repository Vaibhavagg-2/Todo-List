import './style.css';
import { addProject } from './addProject';
import { getTask } from './getData';
import { addTask } from './addTask';
import { createEditForm, displayAllTasks, updateTaskList ,displayTodayTasks} from './updateUI';
import { taskFinder } from './storage';
import { displayImpTasks } from './updateUI';

export let currentProject = "Default Project";
export let selectedOption = "";

export function addEventListener(){

allTasks();
    addTaskListener();
    addProjectListener();
    selectedProject();
editForm();
    impTasks();
    todayTasks();
    selected();
    

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
updateTaskList(currentProject);
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


function editForm() {
  const taskList = document.querySelector('.taskList');

  // Event listener on taskList for click events
  taskList.addEventListener('click', (event) => {
    if (selectedOption === "Today" || selectedOption === "All Tasks" || selectedOption === "Important Tasks") {return;}
    else if (event.target && event.target.classList.contains('task')) {
      let taskId = event.target.getAttribute('id');
      let editForm = event.target.querySelector('.task-item');

      if (!editForm) {
        // If no edit form exists, create and append it
        console.log(currentProject);
        event.target.appendChild(createEditForm(taskFinder(taskId, currentProject)));
      } else {
        // Toggle edit form visibility
        editForm.classList.toggle('active');

        // Check if edit form should be hidden
      }
    }
  });
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

function allTasks(){
  const allTasksBtn = document.querySelector('.allTask ');

  allTasksBtn.addEventListener('click',displayAllTasks);
}

function impTasks(){
  const impTasks = document.querySelector('#impTasks');

  impTasks.addEventListener('click',displayImpTasks);
}

function todayTasks(){
  const todayTasks = document.querySelector('#todayTasks');
  
  todayTasks.addEventListener('click',displayTodayTasks);
}

function selected(){
  const lists = document.querySelectorAll('.list');

  lists.forEach(list=>{
    list.addEventListener('click',(e)=>{
      if (e.target.tagName === 'LI') {
        // Remove 'selected' class from all items in all lists
        document.querySelectorAll('.list li').forEach(item => {
          item.classList.remove('selected');
        });

        selectedOption = e.target.textContent;
        // Add 'selected' class to clicked item
        e.target.classList.add('selected');
      }
    });

  });
}