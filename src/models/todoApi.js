class TodoApi {
  constructor(url = 'https://todo--list--challenge.herokuapp.com/notes') {
    this.url = url;
  }

  loadNotes(callback, errorCallBack) {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        errorCallBack();
      });
  }

  createNote(note) {
    fetch(this.url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ content: note }),
    });
  }

  resetNotes() {
    fetch(this.url, {
      method: 'DELETE',
    });
  }
}
module.exports = TodoApi;
