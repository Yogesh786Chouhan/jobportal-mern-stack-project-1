import { category } from "../model/add_category_model.js";

export const AllCategory = async (req, res) => {
    let data = await category.find({});
    // console.log(data);
    if (data.length > 0) {
        res.json({ success: true, results: data })
    }
}