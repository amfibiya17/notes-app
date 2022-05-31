/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const TodoModel = require('../models/todoModel');
const TodoView = require('../views/todoView');

describe('Notes view', () => {
  // We can use the beforeEach() hook
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays two notes', () => {
    const model = new TodoModel();
    const view = new TodoView(model);
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
