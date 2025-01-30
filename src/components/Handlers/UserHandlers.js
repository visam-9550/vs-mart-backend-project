const ECommerceUserModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env
const bcrypt = require("bcryptjs")

const CreateUserHandler = async(req, res) =>{
    try{
        const {user_email, password} = req.body
        // console.log(user_email, password)
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        const bodyDetails = {
            user_email: user_email,
            password: hashedPassword
        }
        const newUser = await ECommerceUserModel.create(bodyDetails)
        await newUser.save();
        res.status(200).json({
            status: "success",
            message: `Successfully user registerd with ${bodyDetails.user_email}`
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const GetUsersHandler = async(req, res) =>{
    try{
        const usersData = await ECommerceUserModel.find()
        res.status(200).json({
            status: "success",
            usersData
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const GetUserHandler = async(req, res) =>{
    try{
        const {user_email, password} = req.body
        const user = await ECommerceUserModel.findOne({user_email})
        console.log(user)
        if(user){
            const comparedPassword = await bcrypt.compare(password, user.password)
            if(comparedPassword){
                const token = jwt.sign({userData: user}, SECRET_KEY)
                const emailToken = {
                    token,
                    user_email
                }
                res.cookie("userData", emailToken, {maxAge: 100000, httpOnly: true, path: "/"})
                res.status(200).json({
                    status: "success",
                    token
                })
            }else{
                console.log("No")
                res.status(404).json({
                    status: "failure",
                    message: "Invalid password"
                })
            }
        }
        
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}


module.exports = {CreateUserHandler, GetUsersHandler, GetUserHandler}