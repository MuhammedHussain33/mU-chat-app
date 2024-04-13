import User from "../models/user.model.js";

export const getUsersForsidebar=async(req,res)=>{
    try {

        const loggeddUserId=req.user._id

        const filteredUsers = await User.find({_id:{$ne:loggeddUserId}}).select("-password")

        res.status(200).json(filteredUsers)
        
    } catch (error) {
       console.log("Error in getUsersFromSidebar",error.message);
       res.status(500).json({error:"Internal server error"}) 
    }
}