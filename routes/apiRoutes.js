var db = require("../db/db");
// const { v4: uuidv4 } = require("uuid");
const store = require("../db/store");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    store
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });

  app.post("/api/notes", function(req, res) {
    store
      .addNotes(req.body)
      .then(res.status(200).json("Added a note."))
      .catch(err => res.status(500).json(err));
  });

  app.delete("/api/notes/:id", function(req, res) {
    const deleteID = req.params.id;

    store
      .deleteNote(deleteID)
      .then(res.status(200).json("Finished deleting."))
      .catch(err => res.status(500).json(err));
  
  })

};
