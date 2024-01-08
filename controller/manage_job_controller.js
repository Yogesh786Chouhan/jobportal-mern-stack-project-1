import { Jobs} from "../model/post_job_model.js"
export const manage_job_controller = async (req, res) => {
    let data = await Jobs.find({});
    // console.log(data);
    if(data.length > 0) {
        res.json({success: true, results: data })
    }
}