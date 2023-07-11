var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);

/* GET skill details */
router.get('/:id', skillsCtrl.details);

module.exports = router;