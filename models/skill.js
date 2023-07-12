const { v4: uuid} = require('uuid');
const skills = [
    { id: 0, name: 'javascript', competency: 'intermediate', certification: 'none yet (GA SEI loading)', details: "I believe it's the drunk creepy uncle of programming... But, as it seems industry still can't stop loving their uncle, so I'm learning to get along with him" },
    { id: 7, name: 'css', competency: 'like, master?', certification: 'none', details: "It's not that I hard it find, or like confusing, or like impossible to manage... I guess I'd prefer a little sass, that's all..." },
    { id: 1, name: 'python', competency: 'intermediate', certification: 'none', details: "Know it, love it! It's open, it's standardized and you can't get 1+1=11 like some other languages... Looking at you js!" },
    { id: 2, name: 'dotnet', competency: 'beginner', certification: 'none', details: "Pretty cool (for a statically-typed language). A bit too static and patterrn-y at times, but Microsoft's best ever decision to open-source it (for the most part) AND make it cross-platform makes it one of the most robust languages in my eyes." },
    { id: 3, name: 'design patterns', competency: 'intermediate', certification: 'none', details: "Can't stand them. Can't do without them." },
    { id: 4, name: 'clean architecture', competency: 'intermediate', certification: 'none', details: "This is an addiction. This is an obsession. Stay away from 'jasontaylordev' and uncle tom!" },
    { id: 5, name: 'data science', competency: 'intermediate', certification: 'multiple Coursera certificates', details: "I loved it before it was cool." },
    { id: 6, name: 'game development', competency: 'beginner', certification: 'none', details: "A childhood fantasy of mine, was to one day see Epic Games's studio and just have a tiny peek at Unreal Engine. When they made it accessible to the public, I knew times have changed forever." },

];

const getOne = (id) => skills.find(skl => skl.id == id);

const getAll = () => skills;

const deleteOne = (id) => skills.splice(skills.findIndex(skill => skill.id == id), 1);

const update = (id,newData) => {
    const skill = getOne(id);
    skill.name = newData.name;
    skill.competency = newData.competency;
    skill.certification = newData.certification;
    skill.details = newData.details;
}

const create = (skill) => {
    const id = uuid();
    skill.id = id;
    skills.push(skill);
}


module.exports = {
    getAll,
    getOne,
    new: create,
    delete: deleteOne,
    update,
};