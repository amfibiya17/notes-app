// const TodoModel = require('../models/todoModel');

// const model = new TodoModel();

class TodoView {
  constructor(model) {
    this.model = model;
    this.mainContainerEL = document.querySelector('#main-container');

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#message-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((element) => {
      element.remove();
    });

    const notes = this.model.getNotes();

    document.querySelector('#message-input').value = ''; // hasn't been tested

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEL.append(noteEl);
    });
  }
}

module.exports = TodoView;
