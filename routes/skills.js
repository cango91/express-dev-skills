var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);
/* GET new skill */
router.get('/new', skillsCtrl.new);
/* GET skill details */
router.get('/:id', skillsCtrl.details);
/* GET edit skill */
router.get('/:id/edit',skillsCtrl.edit);
/* POST new skill */
router.post('/', skillsCtrl.create);
/* DELETE skill */
router.delete('/:id',skillsCtrl.delete);
/* PUT skill */
router.put('/:id',skillsCtrl.update);

module.exports = router;