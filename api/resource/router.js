// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')


router.get('/', (req, res, next)=> {
    Resource.getAll()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err=> {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    Resource.insert(req.body)
    .then(newresource => {
        res.status(201).json(newresource)
})
})
module.exports = router;