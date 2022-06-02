const TodoApi = require('./models/todoApi');
const TodoModel = require('./models/todoModel');
const TodoView = require('./views/todoView');

const api = new TodoApi();

const model = new TodoModel();
model.addNote('This is an example note');

const view = new TodoView(model, api);
view.displayNotes();

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});

console.log('Hello!');
