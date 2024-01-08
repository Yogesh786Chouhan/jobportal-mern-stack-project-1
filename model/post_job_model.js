import mongoose from 'mongoose';
// mongoose.connect('mongodb://127.0.0.1:27017/job_5_db');
mongoose.connect('mongodb+srv://yogeshchouhan074358:FDIUY7HMqfQrlGp9@jobportalproject.sqbjnpi.mongodb.net/?retryWrites=true&w=majority' ); 
const postJobSchema = mongoose.Schema(
    {
        job_category: String,
        job_title: String,
        company_name: String,
        job_type: String,
        salary: String,
        location: String,
        description: String,
        image: String,

    }
)
export const Jobs = mongoose.model("job", postJobSchema);



