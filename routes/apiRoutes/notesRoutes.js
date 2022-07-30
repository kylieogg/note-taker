const router = require('express').Router();
const { addNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
  });

  router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

      var note = addNote(req.body, notes);
      res.json(note);
  });



module.exports = router;