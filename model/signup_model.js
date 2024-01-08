import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/job_5_db');
mongoose.connect('mongodb+srv://yogeshchouhan074358:FDIUY7HMqfQrlGp9@jobportalproject.sqbjnpi.mongodb.net/?retryWrites=true&w=majority' ); 
const signupSchema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        location: String
    }
)
export const Signup = mongoose.model("signup", signupSchema);