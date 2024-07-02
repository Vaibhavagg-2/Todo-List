import { v4 as uuidv4 } from 'uuid';

function generateUUID() {
  return uuidv4();
}



export function getProject(){
    const projectNameField = document.querySelector('#name');
    const projectName = projectNameField.value;
    console.log(projectName);
    return projectName;
}



export function getTask(){
    const taskName = document.querySelector('#task-name').value;
    const dueDate = document.querySelector('#due-date').value;
    const dueTime = document.querySelector('#due-time').value;

    let taskObj = {
        name: taskName,
        dueDate: dueDate,
        dueTime: dueTime,
        isChecked: checkImp
    }
    console.log(taskObj);
    return taskObj;


}