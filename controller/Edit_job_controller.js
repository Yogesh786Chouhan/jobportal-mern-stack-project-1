
import { Jobs } from "../model/post_job_model.js";
export const Edit_job_controller = async (req, res) => {
    try {
        let result = await Jobs.findById({ _id: req.params.jobId });
        // console.log(result);
        if (result != null) {
            res.json({ result, success: true });
        }
    } catch (error) {
        console.log(error);
    }

}