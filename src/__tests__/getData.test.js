const { getTask, getProject } = require('../getData');

describe('getData functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="task-name" value="Test Task" />
      <input id="due-date" value="2024-03-13" />
      <input id="due-time" value="10:00" />
      <input id="ImportantCheckbox" type="checkbox" />
      <input id="name" value="Test Project" />
    `;
  });

  test('getTask returns correct task object', () => {
    const task = getTask();
    expect(task).toHaveProperty('name', 'Test Task');
    expect(task).toHaveProperty('dueDate', '2024-03-13');
    expect(task).toHaveProperty('dueTime', '10:00');
    expect(task).toHaveProperty('isChecked', false);
    expect(task).toHaveProperty('id');
  });

  test('getProject returns correct project name', () => {
    const projectName = getProject();
    expect(projectName).toBe('Test Project');
  });
}); 