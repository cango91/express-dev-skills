const Skills = require('../models/skill');

const index = (req,res) => res.render('skills/index',{
    skills: Skills.getAll()
});

const details = (req,res) => res.render('skills/detail',{
    skill: Skills.getOne(req.params.id)
});

module.exports = {
    index,
    details
}