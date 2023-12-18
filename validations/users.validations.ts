import { body, param } from "express-validator";



export const createUser = [
    body("username").exists().withMessage("username is missing").isString().notEmpty().withMessage("username cannot be empty"),
    body("age").exists().withMessage("age is missing").isInt().withMessage("age must be a number"),
    body("hobbies").exists().isArray().withMessage("Hobbies shoud be an array"),
    body("hobbies.*").custom(value => {
            const isValid = typeof value === 'string';
            if (!isValid) {
              throw new Error('All elements in the hobbies array must be strings');
            }
          return true;
    })
]

export const updateUser = [
    param("id").exists().isUUID().optional(),
    body("username").exists().withMessage("username is missing").isString().notEmpty().withMessage("username cannot be empty").optional(),
    body("age").exists().withMessage("age is missing").isInt().withMessage("age must be a number").optional(),
    body("hobbies").exists().isArray().withMessage("Hobbies shoud be an array").optional(),
    body("hobbies.*").custom(value => {
            const isValid = typeof value === 'string';
            if (!isValid) {
              throw new Error('All elements in the hobbies array must be strings');
            }
          return true;
    }).optional()
]

export const deleteUser = [
    param("id").exists().isUUID().withMessage("Invalid Id"),
]

export const selectUser = [
    param("id").exists().isUUID().withMessage("Invalid Id"),
]