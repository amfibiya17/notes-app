// const TodoModel = require('../models/todoModel');

// const model = new TodoModel();

class TodoView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEL = document.querySelector('#main-container');

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#message-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
    setTimeout(() => {
      document.querySelector('#message-input').value = '';
      this.api.createNote(newNote);
    }, 0);
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((element) => {
      element.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEL.append(noteEl);
    });
  }

  displayError() {
    const errorEl = document.createElement('div');
    errorEl.innerText = 'Oops, something went wrong!';
    errorEl.className = 'error';
    this.mainContainerEL.append(errorEl);
  }
}

module.exports = TodoView;
