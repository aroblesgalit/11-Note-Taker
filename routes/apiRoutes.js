var db = require("../db/db");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
      db.push(req.body);
      res.json(true);
  });

  // app.delete("/api/notes/:id", function(req, res) {
  //   var deleteNote = db[id];
  //   delete deleteNote;
  //   res.end("Deleted note: \n" + JSON.stringify(deleteNote, null, 4));
  // })

};
