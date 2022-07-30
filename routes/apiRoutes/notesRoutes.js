const router = require('express').Router();
const { addNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/db', (req, res) => {
    let results = notes;

    res.json(results);
  });



module.exports = router;