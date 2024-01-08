import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/job_5_db' ); 
mongoose.connect('mongodb+srv://yogeshchouhan074358:FDIUY7HMqfQrlGp9@jobportalproject.sqbjnpi.mongodb.net/?retryWrites=true&w=majority' ); 
const AddCategorySchema = mongoose.Schema(
    {
        job_category: String,
    
     }
)
export const category = mongoose.model("category", AddCategorySchema)