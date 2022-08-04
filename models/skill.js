const skills = [
    {skill: 'HTML', done: true},
    {skill: 'JavaScript', done: true},
    {skill: 'CSS', done: true},
    {skill: 'Node.js', done: false},
    {skill: 'Express', done: false},
    {skill: 'MongoDB', done: false},
    {skill: 'Python', done: true},
    {skill: 'Django', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills.findIndex(skill => skill.id === parseInt(id))
}

function getAll() {
    return skills;
}