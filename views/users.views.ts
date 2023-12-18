import { randomUUID } from "crypto";
import { User } from "../routes/entities/users.entity";

let users: User[] = [];

const getAllUser = (req:any, res:any) => {
    return res.send(users);
}
const getUser = (id:string, res:any) => {
    const index = users.findIndex(user => user.id === id)
    if(index === -1) {
        return res.status(404).json({
            message: "Not Found"
        });
    }
    
    return res.status(200).json(users[index]);
}

const createUser = (user:any ,res:any) => {
    const id = randomUUID();
    users.push({id: id,...user});
    return res.status(201).send({id: id,...user});
}

const updateUser = (id:String, user:any, res:any) => {
    const index = users.findIndex(user => user.id === id)
    if(index == -1){
        return res.status(404).json({
            message: "Not found"
        })
    }
    users[index] = {...users[index], ...user};
    return res.status(200).json(users[index])
}


const deleteUser = (id:string, res:any) => {
    const index = users.findIndex(user => user.id === id)
    if(index === -1) {
        return res.status(404).json({
            message: "Not Found"
        });
    }
    users.splice(index,1);
    return res.status(204).send();
}


module.exports = {getAllUser, createUser, updateUser, deleteUser, getUser}