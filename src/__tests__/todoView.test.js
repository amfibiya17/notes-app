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
    const model = new TodoModel();
    const view = new TodoView(model);
  });

  it('displays two notes', () => {
    const model = new TodoModel();
    const view = new TodoView(model);
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('clicks the button and adds message', () => {
    const model = new TodoModel();
    const view = new TodoView(model);

    const input = document.querySelector('#message-input');
    input.value = 'Hello!';

    const button = document.querySelector('#add-note-button');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual(
      'Hello!'
    );
    expect(document.querySelector('#message-input')).toEqual('');
  });

  it('clears the list of previous notes before displaying', () => {
    const model = new TodoModel();
    const view = new TodoView(model);

    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
