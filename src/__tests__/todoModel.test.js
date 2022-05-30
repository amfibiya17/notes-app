const TodoListModel = require('../models/todoListModel');

describe('TodoListModel', () => {
  let model;

  beforeEach(() => {
    model = new TodoListModel();
  });

  it('returns an empty list of notes to the todo list', () => {
    expect(model.getNotes()).toEqual([]);
  });

  it('adds a note to the todo list', () => {
    model.addNote('Renew spotify subscription');

    expect(model.getNotes()).toEqual(['Renew spotify subscription']);
  });

  it('clears all the notes on the todo list', () => {
    model.addNote('Renew spotify subscription');
    model.addNote('Buy soya milk');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});
