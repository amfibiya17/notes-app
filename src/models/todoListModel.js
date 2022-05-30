class TodoListModel {
  constructor() {
    this.notes = [];
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

module.exports = TodoListModel;
