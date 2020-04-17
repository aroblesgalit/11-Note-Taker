var db = require("../db/db");
const { v4: uuidv4 } = require("uuid");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
      req.body.id = uuidv4();
      db.push(req.body);
      res.json(true);
  });

  app.delete("/api/notes/:id", function(req, res) {
    var deleteNoteId = req.params.id;
    for (var i = 0; i < db.length; i++) {
      var note = db[i];
      if (note.id === deleteNoteId) {
        db.splice(i, 1); 
      }
    }
    // res.end("Deleted note: \n" + JSON.stringify(deleteNoteId, null, 4));
    res.json(db);
  })

};
