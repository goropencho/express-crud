import { body, param } from "express-validator";



export const createUser = [
    body("username").exists().withMessage("username is missing").isString().notEmpty().withMessage("username cannot be empty"),
    body("age").exists().withMessage("age is missing").isInt().withMessage("age must be a number"),
    body("hobbies").exists().isArray().withMessage("Shoud be an array of strings"),
]

export const updateUser = [
    param("id").exists().isUUID(),
    body("username").isString().optional(),
    body("age").isInt().optional(),
    body("hobbies").isArray().optional(),
]

export const deleteUser = [
    param("id").exists().isUUID(),
]

export const selectUser = [
    param("id").exists().isUUID().withMessage("Invalid UUID"),
]