import express from 'express';
const users = express.Router();
const userView = require('../views/users.views');

users.get('/', (req,res) => {
    res.send(userView.getAllUser());
})

users.post('/', (req,res) => {
    res.send(userView.createUser(req.body));
})

users.put('/:id', (req,res) => {
    res.send(userView.updateUser(req.params.id,req.body))
})


users.delete('/:id', (req, res) => {
    res.send(userView.deleteUser(req.params.id))
})


module.exports = users;