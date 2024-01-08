import bcrypt from 'bcrypt';
import { Jobs } from '../model/post_job_model.js';
export const Delete_job_Controller = async (req, res) => {
    // console.log(req.params.delId);
    let delRes = await Jobs.findByIdAndDelete({_id: req.params.delId});
    if(delRes){
        res.json({message: "User Successfully Delete", success: true});
    }
}