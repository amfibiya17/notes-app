/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const TodoApi = require('../models/todoApi');
const TodoModel = require('../models/todoModel');
const TodoView = require('../views/todoView');

describe('Notes view', () => {
  let view;
  let model;
  let api;
  // We can use the beforeEach() hook
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new TodoModel();
    api = new TodoApi();
    view = new TodoView(model, api);
  });

  it('displays two notes', () => {
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('clicks the button and adds message', () => {
    const input = document.querySelector('#message-input');
    input.value = 'Hello!';

    const button = document.querySelector('#add-note-button');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual(
      'Hello!'
    );
  });

  it('clears the list of previous notes before displaying', () => {
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('appends an error message when something went wrong', () => {
    model.addNote('Checking error');
    view.displayNotes();
    view.displayError();

    expect(document.querySelectorAll('div.error')[0].innerText).toEqual(
      'Oops, something went wrong!'
    );
  });
});
