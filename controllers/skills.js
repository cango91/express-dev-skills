const Skills = require('../models/skill');

const index = (req,res) => res.render('skills/index',{
    skills: Skills.getAll()
});

const details = (req,res) => res.render('skills/detail',{
    skill: Skills.getOne(req.params.id)
});

const deleteOne = (req,res) => {
    Skills.delete(req.params.id);
    res.redirect('/skills');
}

const newSkill = (req,res) => res.render('skills/new',{
    title: 'new Skill()',
})

const create = (req,res) =>{
    Skills.new(req.body);
    res.redirect('/skills');
}

const edit = (req,res) => res.render('skills/edit', {
    title: 'skill.edit()',
    skill: Skills.getOne(req.params.id),
});

const update = (req,res) => {
    Skills.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
    index,
    details,
    delete: deleteOne,
    edit,
    update,
    new: newSkill,
    create
}