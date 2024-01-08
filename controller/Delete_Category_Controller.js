import { category } from "../model/add_category_model.js";
export const Delete_Category_Controller = async (req, res) => {
    console.log(req.params.CatdelId);
    let delRes = await category.findByIdAndDelete({ _id: req.params.CatdelId });
    if (delRes) {
        res.json({ message: "User Successfully Delete", success: true });
    }
}