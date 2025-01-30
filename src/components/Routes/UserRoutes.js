const express = require("express")
const {CreateUserHandler, GetUsersHandler, GetUserHandler} = require("../Handlers/UserHandlers")
const UserRouter = express.Router()


UserRouter.post("/signup", CreateUserHandler)
// UserRouter.post("/login", GetUsersHandler)
UserRouter.post("/login", GetUserHandler)

module.exports = UserRouter;