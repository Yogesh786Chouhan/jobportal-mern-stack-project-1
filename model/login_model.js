import mongoose from 'mongoose';
// mongoose.connect('mongodb://127.0.0.1:27017/job_5_db');
mongoose.connect('mongodb+srv://yogeshchouhan074358:FDIUY7HMqfQrlGp9@jobportalproject.sqbjnpi.mongodb.net/?retryWrites=true&w=majority' ); 

const adminLoginSchema = mongoose.Schema(
    {
        email: String,
        password: String,
        status: String
    }
)
export const AdminLogin = mongoose.model("admin_login", adminLoginSchema);
