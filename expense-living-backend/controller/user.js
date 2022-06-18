var User = require('../models/user');

exports.user_create= async function (req,res){
    const {first_name,last_name,birthday,marital_status,email,password} =req.body
    const isEmailExist = await User.findOne({ email });
    // throw error when email already registered
    if (isEmailExist)
        res.status(400).send("Email already exists");

    const user = new User({
        first_name,
        last_name,
        birthday,
        marital_status,
        email,
        password,
    });
    try {
        const savedUser = await user.save();
        res.send("User create successfully")
        // res.json({  error: null, data: { userId: savedUser._id } });

    } catch (error) {
        res.send(error)
    }
}

exports.login_user = async function (res,req){
    const {email,password} =req.body
    const user = await User.findOne({ email });
    if(!user){
        res.send("Username or password wrong");
    }
    else {
        const validPassword = req.body.password.localeCompare(user.password);
        if(validPassword) {
            res.send("Username or password wrong");
        }else {
            res.send(user.id)
        }
    }
    }