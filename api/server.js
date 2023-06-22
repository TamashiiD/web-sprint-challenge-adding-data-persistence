// build your server here and require it from index.js
const express = require("express")
const server = express()


server.use(express.json())

const projectRouter = require('./project/router') //this goes under the server
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')


//this connects the node server to the express routing system.
server.use('/api/projects' , projectRouter) 
server.use('/api/resources' , resourceRouter)
server.use('/api/tasks' , taskRouter) 


// DO YOUR MAGIC
server.use('*', (req, res, next)=>{
next({status: 404, message: 'not found'})
})

server.use((err, req, res, next)=> {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
