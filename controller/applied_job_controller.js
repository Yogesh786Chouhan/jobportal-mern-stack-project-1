import { apply } from "../model/apply_job_model.js";
export const applied_job_controller = async (req, res) => {
    let data = await apply.find({});
    // console.log(data);
    if (data.length > 0) {
        res.json({ success: true, results: data })
    }
}