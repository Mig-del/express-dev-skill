const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
} 

function create(req, res){
    console.log(req.body,  "<- req.body, contents of the form")
    
    Skill.create(req.body)

    res.redirect('/skills');
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res){
    console.log(req.params, '< - req.params in show function')
    res.render('skills/show', {
        skillNum: req.params.id,
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req,res){
    res.render('skills/new')
}