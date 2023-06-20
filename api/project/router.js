// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')



router.get('/' ,(req, res, next)=> {
Project.getAll()
.then(project => {
    res.status(200).json(project)
})
.catch(err=>{
    next(err)
})
})

router.post('/', (req, res, next) => {
    Project.insert(req.body)
    .then(newproject => {
        res.status(201).json(newproject)
})
})

module.exports = router;