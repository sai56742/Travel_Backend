

const User = require('../model/user');


const { sendError } = require('../utils/helper');

const jwt = require("jsonwebtoken")

exports.createUser = async (req,res) => {
    const { name, email, password } = req.body

  const user = await User.findOne({ email });

  if(user) 
  return sendError(res, "This email is already exists!")

 const newUser = new User({
        name ,
        email ,
        password ,
    })

  await newUser.save()
    // res.send(newUser)
    // res.json({success: true, user: {id: newUser.id}})

    res.json({
        success: true,
        user: {
            name: newUser.name, email: newUser.email, id: newUser._id, verified: newUser.verified
        },
    });
    


}

exports.signin = async (req, res) => {
    
    const {email, password} = req.body 
    if(!email.trim() || !password.trim())
    return sendError(res, "email/password missing!");

   const user = await User.findOne({email});
   if(!user) return sendError(res, 'User not found!');

  const isMatched = await user.comparePassword(password)
  if(!isMatched) return sendError(res, 'Email/passeord does not match!');

const token = jwt.sign({userId: user._id}, 
    // process.env.JWT_SECRET
    `${process.env.JWT_SECRET_KEY}`
    ,{
    expiresIn: '1d',
});

console.log("check the token====>",token);

res.json({
    success: true,
    user: {
        name: user.name, email: user.email, id: user._id, token: token
    },
});

};
 
exports.useridcheck = async (req , res)=>{
    const { email } = req.body

    // const user = await User.findOne({ email });

    const user = await User.findOne({email});
    if(!user) return sendError(res, 'User not found!');

      res.json({
        success: true,
        user: {
            name: user.name, email: user.email
        },
    });
  }

  exports.passwordUpadte = async (req , res)=>{

    const {email, password } = req.body

console.log("chek the new password entered====>",password)
const user = await User.findOne({email});
if(!user) return sendError(res, 'User not found!');

console.log("check teh retrived user data===>",user)
user.password = req.body.password;
user.save(function(err){
           if(err)sendError(res, 'User password updation failed!');
})


  res.json({
    success: true,
    msg : "password successfully updated",
        user: {
        name: user.name, email: user.email
    },
});

    // User.findOne({password: req.body.password}, function(err, user){
    //     if(err)return handleErr(err);

    //     user.password = req.body.password;
    //     user.save(function(err){
    //        if(err)sendError(res, 'User password updation failed!');
    //        //user has been updated

    //        res.json({
    //         success: true,
    //         msg : "password succesfully updated",
    //         user: {
    //             name: user.name, email: user.email
    //         },
    //     });

    //      });
    //    });
    // const { email ,password } = req.body

    // // const user = await User.findOne({ email });

    // const user = await User.findOne({email});
    // if(!user) return sendError(res, 'User not found!');

    // if(user)

    //   res.json({
    //     success: true,
    //     user: {
    //         name: user.name, email: user.email
    //     },
    // });
  }




 

