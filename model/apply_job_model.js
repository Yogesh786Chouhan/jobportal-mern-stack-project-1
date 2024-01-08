import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/job_5_db' ); 
mongoose.connect('mongodb+srv://yogeshchouhan074358:FDIUY7HMqfQrlGp9@jobportalproject.sqbjnpi.mongodb.net/?retryWrites=true&w=majority' ); 
const applyJobSchema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        address: String,
        message: String,
        file: String,
    }
)
export const apply = mongoose.model("applyjob", applyJobSchema);