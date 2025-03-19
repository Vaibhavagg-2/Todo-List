import { addTask } from '../addTask';
import { getTask } from '../getData';
import { storeTask } from '../storage';
import * as addDOM from '../addDOM';

// Mock dependencies
jest.mock('../getData');
jest.mock('../storage');

describe('addTask', () => {
  const mockTask = {
    name: 'Test Task',
    id: '123',
    dueDate: '2024-03-13',
    dueTime: '10:00',
    isChecked: false
  };

  beforeEach(() => {
    // Clear mocks
    jest.clearAllMocks();
    // Setup mocks
    getTask.mockReturnValue(mockTask);
    // Mock currentProject
    jest.spyOn(addDOM, 'getCurrentProject').mockReturnValue('Test Project');
  });

  test('adds task to current project', () => {
    addTask();
    expect(getTask).toHaveBeenCalled();
    expect(storeTask).toHaveBeenCalledWith('Test Project', mockTask);
  });
}); 