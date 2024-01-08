import { category } from "../model/add_category_model.js";
export const EditCategory_controller = async (req,res) => {
    try {
        let result = await  category.findById({_id: req.params.catId});
        if(result != null){
            res.json({result, success: true });
        }     
    } catch (error) {
        console.log(error);
    }
   
}