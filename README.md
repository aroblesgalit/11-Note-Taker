11 Note Taker
> An application for taking notes

## Description

This was a homework assignment were we created an application that can be used to write, save, and delete notes. This application used an express backend to save and retrieve note data from a JSON file.

## Completed
* Built the backend and connected to the frontend.

* Created HTML routes for:

  * `/notes` - which returns the `notes.html` file.

  * `*` - which returns the `index.html` file

* Have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* Created the following API routes:

  * GET `/api/notes` - which reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - which receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - which receives a query parameter containing the id of a note to delete and then rewrites the notes to the `db.json` file.

## User Story
```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria
```
Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.
```

## Screenshots