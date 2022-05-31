// const TodoModel = require('../models/todoModel');

// const model = new TodoModel();

class TodoView {
  constructor(model) {
    this.model = model;
    this.mainContainerEL = document.querySelector('#main-container');
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEL.append(noteEl);
    });
  }
}

module.exports = TodoView;
