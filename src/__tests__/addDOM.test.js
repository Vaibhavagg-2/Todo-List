import { getCurrentProject, setCurrentProject } from '../addDOM';

describe('addDOM functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="allTask"></div>
      <div id="todayTasks"></div>
      <div id="impTasks"></div>
      <div id="modal">
        <form id="projectModalForm"></form>
        <span class="project-close-modal"></span>
      </div>
      <div id="taskModal">
        <form id="taskModalForm"></form>
        <span class="close-modal"></span>
      </div>
    `;
  });

  test('getCurrentProject and setCurrentProject work correctly', () => {
    expect(getCurrentProject()).toBe('Default Project');
    setCurrentProject('New Project');
    expect(getCurrentProject()).toBe('New Project');
  });
}); 