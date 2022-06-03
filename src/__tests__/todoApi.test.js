const { create } = require('domain');
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

  describe('createNote', () => {
    it('creates notes and sends them to the back end server', (done) => {
      const api = new TodoApi();

      fetch.mockResponseOnce(async (request) => {
        expect(request.method).toBe('POST');
        const requestBody = await request.json();
        expect(requestBody.content).toEqual('Checking create Note');
        done();

        return JSON.stringify(['Checking create Note']);
      });

      api.createNote('Checking create Note');
    });
  });
});
