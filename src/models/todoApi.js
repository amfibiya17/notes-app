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
}
module.exports = TodoApi;
