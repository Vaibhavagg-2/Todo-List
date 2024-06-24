import './style.css';


const openModal = document.querySelector('.project-btn');
const task = document.querySelector('.task-btn')
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const taskModal = document.querySelector('#task-modal')
const modalForm = document.getElementById('modalForm');


const close_btn = document.querySelector("#task-modal .close-modal");

close_btn.addEventListener('click',()=>{
    taskModal.style.display="none";
});



    openModal.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    task.addEventListener('click', () => {
        taskModal.style.display = 'flex';
      });


    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    modalForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Form submitted!');
      modal.style.display = 'none';
    });
  



