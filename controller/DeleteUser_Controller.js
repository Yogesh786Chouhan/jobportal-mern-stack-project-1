import bcrypt from 'bcrypt';
import { Signup } from '../model/signup_model.js';
export const DeleteUser_Controller = async (req, res) => {
    // console.log(req.params.delId);
    let delRes = await Signup.findByIdAndDelete({_id: req.params.delId});
    if(delRes){
        res.json({message: "User Successfully Delete", success: true});
    }
}