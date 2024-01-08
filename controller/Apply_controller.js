import { apply } from "../model/apply_job_model.js";



export const Apply_controller = async (req, res) => {
    console.log(req.body)
    const { first_name, last_name, email, address, message } = req.body;
    let result = await apply({ first_name, last_name, email, address, message, file: req.file.filename });
    // console.log(req.file)
    // console.log(req.file.filename);
    let data = await result.save();
    if (data) {
        res.json({ message: "Job applied successfully...", success: true })
    }
    else {
        res.json({ message: "error", success: false })
    }
}

