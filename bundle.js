(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/models/todoModel.js
  var require_todoModel = __commonJS({
    "src/models/todoModel.js"(exports, module) {
      var TodoModel2 = class {
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
      module.exports = TodoModel2;
    }
  });

  // src/views/todoView.js
  var require_todoView = __commonJS({
    "src/views/todoView.js"(exports, module) {
      var TodoView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEL = document.querySelector("#main-container");
          document.querySelector("#add-note-button").addEventListener("click", () => {
            const newNote = document.querySelector("#message-input").value;
            this.addNewNote(newNote);
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
          setTimeout(() => document.querySelector("#message-input").value = "", 0);
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEL.append(noteEl);
          });
        }
      };
      module.exports = TodoView2;
    }
  });

  // src/index.js
  var TodoModel = require_todoModel();
  var TodoView = require_todoView();
  var model = new TodoModel();
  model.addNote("This is an example note");
  var view = new TodoView(model);
  view.displayNotes();
  console.log("Hello!");
})();
