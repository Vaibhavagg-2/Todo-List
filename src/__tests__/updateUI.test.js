import { 
  updateTaskList, 
  updateProjectList 
} from '../updateUI';

describe('updateUI functions', () => {
  const mockTasks = [
    {
      id: '123',
      name: 'Test Task',
      isChecked: true,
      dueDate: '2024-03-13',
      dueTime: '10:00'
    }
  ];
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="taskList"></div>
      <div class="projects">
        <ul></ul>
      </div>
    `;
    localStorage.clear();
    jest.clearAllMocks();
    Storage.prototype.getItem = jest.fn((key) => {
      if (key === 'Test Project') return JSON.stringify(mockTasks);
      return null;
    });
  });

  test('updateTaskList renders tasks correctly', () => {
    updateTaskList('Test Project');
    const taskCard = document.querySelector('.task');
    expect(taskCard).toBeTruthy();
    expect(taskCard.id).toBe('123');
  });

  // test('updateProjectList renders projects', () => {
  //   const projects = ['Project 1', 'Project 2'];
  //   updateProjectList(projects);
  //   const projectElements = document.querySelectorAll('.projects ul li');
  //   expect(projectElements.length).toBe(2);
  // });
  //
  // test('updateTaskList handles empty project', () => {
  //   localStorage.setItem('Empty Project', JSON.stringify([]));
  //   updateTaskList('Empty Project');
  //   const taskList = document.querySelector('.taskList');
  //   expect(taskList.innerHTML).toBe('');
  // });
}); 