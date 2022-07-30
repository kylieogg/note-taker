const router = require('express').Router();
const { addNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/db', (req, res) => {
    let results = notes;

    res.json(results);
  });

  router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = addNote(req.body, notes);
      res.json(note);
    }
  });



module.exports = router;