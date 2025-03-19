import { app } from '../index';
import { getProjects } from '../storage';
import { updateProjectList } from '../updateUI';
import { addEventListener } from '../addDOM';

jest.mock('../storage', () => ({
  getProjects: jest.fn(),
  projects: []
}));

jest.mock('../updateUI', () => ({
  updateProjectList: jest.fn()
}));

jest.mock('../addDOM', () => ({
  addEventListener: jest.fn()
}));

describe('index.js', () => {
  test('app function exists', () => {
    expect(typeof app).toBe('function');
  });
}); 