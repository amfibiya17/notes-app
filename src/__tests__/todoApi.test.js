const TodoApi = require('../models/todoApi');

require('jest-fetch-mock').enableMocks();

describe('TodoApi', () => {
  describe('loadNotes', () => {
    it('returns notes from the back end server', () => {
      const api = new TodoApi();
      fetch.mockResponseOnce(JSON.stringify(['Checking fetch']));

      api.loadNotes((notes) => {
        expect(notes).toEqual(['Checking fetch']);
      });
    });
  });
});
