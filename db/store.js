const util = require("util");
const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    // Read
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    // Write
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    // Get notes
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        })
    }
    // Add notes
    addNotes(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank");
        }

        const newNote = { title, text, id: uuidv4() };

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }

    // Delete notes
    deleteNote(id) {
        return this.getNotes()
            .then(notes => {
                for (let i = 0; i < notes.length; i++) {
                    let note = notes[i];
                    if (note.id === id) {
                        notes.splice(i, 1);
                    }
                }
                return notes;
            })
            .then(notes => this.write(notes)) 
            .then(() => notes)
    }
}

module.exports = new Store();