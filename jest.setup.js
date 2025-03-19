import '@testing-library/jest-dom';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

// Mock DOM elements - Include modal elements and buttons
document.body.innerHTML = `
  <div class="container">
    <div class="header">TODO-LIST</div>
    <div class="sidebar list">
      <ul>
        <li id="todayTasks">Today</li>
        <li class="allTask">All Tasks</li>
        <li id="impTasks">Important Tasks</li>
      </ul>
      <hr>
      <div class="projects list"> <ul class="projects list"></ul> </div>
      <button class="project-btn btn">Add Project</button>
    </div>
    <div class="main">
      <div class="taskList"></div>
    </div>
    <div id="taskModal" style="display: none;">
        <div class="modal-content">
            <span id="closeModal" class="close-modal">&times;</span>
            <form id="taskModalForm">
                <!-- Task form elements here if needed for tests -->
            </form>
        </div>
    </div>
    <div id="modal" style="display: none;">
        <div class="modal-content">
            <span id="closeProjectModal" class="project-close-modal">&times;</span>
            <form id="projectModalForm">
                <!-- Project form elements here -->
            </form>
        </div>
    </div>
  </div>
`;

// Mock UUID function if you're using it
global.crypto = {
  randomUUID: () => '123e4567-e89b-12d3-a456-426614174000'
}; 