// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')


router.get('/' , (req, res, next) => {
Task.getAll()
.then(task => {
    res.status(200).json(task)
})
.catch(err=> {
    next(err)
})
})

router.post('/', (req, res, next) => {
    Task.insert(req.body)
    .then(newtask => {
        res.status(201).json(newtask)
})
})
module.exports = router;