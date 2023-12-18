import express from 'express';
const users = express.Router();
const userView = require('../views/users.views');
import { createUser, deleteUser, selectUser, updateUser } from '../validations/users.validations';
import { validationResult,matchedData } from 'express-validator';

users.get('/', (req, res) => userView.getAllUser(req, res));
users.get('/:id', selectUser, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => { return {message: err.msg }})
        })
    }
    return userView.getUser(req.params.id, res)
});

users.post('/', createUser, (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }
    return userView.createUser(matchedData(req, {includeOptionals: false}), res);
})

users.put('/:id', updateUser, (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => { return {message: err.msg }})
        })
    }
    return userView.updateUser(req.params.id, matchedData(req,{includeOptionals: false}), res)
})


users.delete('/:id', deleteUser, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => { return {message: err.msg }})
        })
    }
    return userView.deleteUser(req.params.id, res);
})


module.exports = users;