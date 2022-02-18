const fs = require('fs');
const path = require('path');
const express = require('express');
const {note} = require('./Develop/notes/notes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function createNewArray(body, notesArray) {
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, './Develop/notes/notes'),
        JSON.stringify({ note: notesArray},null, 2)
    )
  
    return note;
  }


app.get('/api/notes', (req, res) => {

    res.json(note)
});

app.post('/api/notes', (req, res) => {
    req.body.id = note.length.toString();

    const notes = createNewArray(req.body, note);
    res.json(notes);
}); 

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  
