const express = require('express');
const router = express.Router();
const Students = require('../services/students');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await Students.getMultiple(req.query.page));
    console.log(await Students.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;