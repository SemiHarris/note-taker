const express = require('express');
const note = require('./Develop/notes/notes.json')
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/api/notes', (req, res) => {

    res.json(note)
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  
