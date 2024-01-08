
import { Jobs } from "../model/post_job_model.js";
export const View_controller = async (req, res) => {
    try {
        let result = await Jobs.findById({ _id: req.params.viewId });
    //  console.log(result);
        if (result != null) {
            res.json({ result, success: true });
        }
     } catch (error) {
        console.log(error);
    }

}