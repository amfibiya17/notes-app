(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/models/todoListModel.js
  var require_todoListModel = __commonJS({
    "src/models/todoListModel.js"(exports, module) {
      var TodoListModel2 = class {
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
      };
      module.exports = TodoListModel2;
    }
  });

  // src/index.js
  var TodoListModel = require_todoListModel();
  var model = new TodoListModel();
  model.addNote("Renew spotify subscription");
  model.addNote("Buy soya milk");
  console.log(model.getNotes());
  console.log("Hello!");
})();
