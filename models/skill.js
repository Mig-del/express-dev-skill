const skills = [
    {id:839205, skill: 'JavaScript', done: true},
    {id:901234, skill: 'CSS', done: true},
    {id:563829, skill: 'HTML', done: true},
    {id:327850, skill: 'Node.js', done: false},
    {id:543219, skill: 'Project-1', done: true},
    {id:123456, skill: 'Project-2', done: false}
];


module.exports = {
    getAll,
    getOne,
    create
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id ===parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}