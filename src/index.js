const TodoModel = require('./models/todoModel');
const TodoView = require('./views/todoView');

const model = new TodoModel();
model.addNote('This is an example note');

const view = new TodoView(model);
view.displayNotes();

console.log('Hello!');
