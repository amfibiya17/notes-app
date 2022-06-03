class TodoApi {
  constructor(url = 'http://localhost:3000/notes') {
    this.url = url;
  }

  loadNotes(callback) {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }

  createNote(note) {
    fetch(this.url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ content: note }),
    });
  }
}
module.exports = TodoApi;
