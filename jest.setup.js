import '@testing-library/jest-dom';

// Mock DOM elements that your tests might need
global.document.body.innerHTML = `
  <div class="container">
    <div class="header">TODO-LIST</div>
    <div class="sidebar list">
      <ul>
        <li id="todayTasks">Today</li>
        <li class="allTask">All Tasks</li>
        <li id="impTasks">Important Tasks</li>
      </ul>
    </div>
    <div class="main">
      <div class="taskList"></div>
    </div>
  </div>
`; 