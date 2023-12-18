import { User } from "../routes/entities/users.entity";
import {validate } from 'class-validator';

let users: User[] = [];

const getAllUser = () => {
    return users;
}


const createUser = () => {
}

const updateUser = (id:String, user:any) => {
    return {id, ...user}
}


const deleteUser = (id:string) => {
    const index = users.findIndex(user => user.id === id)
    if(index === -1) {
        return;
    }
    users.splice(index,1);
    return;
}


module.exports = {getAllUser, createUser, updateUser, deleteUser}