const TodoListModel = require('./models/todoListModel');

const model = new TodoListModel();
model.addNote('Renew spotify subscription');
model.addNote('Buy soya milk');

console.log(model.getNotes());

console.log('Hello!');
