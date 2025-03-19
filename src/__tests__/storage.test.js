import { storeTask, getProjects, storeProjects } from '../storage';

describe('storage functions', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('storeTask adds task to project in localStorage', () => {
    const mockTask = { id: '123', name: 'Test Task' };
    const existingTasks = [];
    localStorage.setItem('Test Project', JSON.stringify(existingTasks));
    
    storeTask('Test Project', mockTask);
    
    const storedTasks = JSON.parse(localStorage.getItem('Test Project'));
    expect(storedTasks).toContainEqual(mockTask);
  });

  test('getProjects retrieves projects from localStorage', () => {
    const projectList = ['Project 1', 'Project 2'];
    localStorage.setItem('projects', JSON.stringify(projectList));
    
    const projects = getProjects();
    expect(projects).toEqual(projectList);
  });

  test('storeProjects saves projects to localStorage', () => {
    const projectList = ['Project 1', 'Project 2'];
    storeProjects(projectList);
    
    const stored = JSON.parse(localStorage.getItem('projects'));
    expect(stored).toEqual(projectList);
  });
}); 