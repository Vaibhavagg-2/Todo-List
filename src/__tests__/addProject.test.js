import { addProject } from '../addProject';
import { projects, storeProjects } from '../storage';
import { updateProjectList } from '../updateUI';

jest.mock('../storage', () => ({
    projects: [],
    storeProjects: jest.fn()
}));

jest.mock('../updateUI', () => ({
    updateProjectList: jest.fn()
}));

describe('addProject', () => {
    beforeEach(() => {
        document.body.innerHTML = `
          <input id="name" value="Test Project" />
        `;
        jest.clearAllMocks();
    });

    test('addProject function exists', () => {
        expect(typeof addProject).toBe('function'); // Simple existence test
    });
}); 