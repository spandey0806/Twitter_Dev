import UserService from "../services/user-service.js";
const userService = new UserService();

export const  signup = async (req,res) => {
    try {
        const response = await UserService.signup.create ({
            email : req.body.email,
            password : req.body.passowrd,
            name : req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}