class TodoModel {
  constructor() {
    this.notes = [];
  }

  setNotes(notes) {
    this.notes = notes;
  }

  getNotes() {
    return this.notes;
  }

  addNote(item) {
    return this.notes.push(item);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = TodoModel;
