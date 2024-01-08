import express from 'express';
export const router = express.Router();
import { SignupController } from '../controller/signup_controller.js';
import { LoginController } from '../controller/login_controller.js';
import { AdminLoginController } from '../controller/admin_login_controller.js';
import { AllUsers } from '../controller/AllUsers.js';
import { DeleteUser_Controller } from '../controller/DeleteUser_Controller.js';
import { AuthMiddleware } from '../middleware/auth_middleware.js';
import { EditUser_controller } from '../controller/EditUser_controller.js';
import { Update_controller } from '../controller/Update_controller.js';
import multer from 'multer'
import { Post_Job_controller } from '../controller/Post_Job_controller.js';
import { Delete_job_Controller } from '../controller/Delete_job_controller.js';
import { manage_job_controller } from '../controller/manage_job_controller.js';
import { Edit_job_controller } from '../controller/Edit_job_controller.js';
import { update_job_controller } from '../controller/update_job_controller.js';
import { View_controller } from '../controller/View_controller.js';
import { Add_Category_controller } from '../controller/Add_Category_controller.js';
import { Manage_Category_contoller } from '../controller/Manage_Category_controller.js';
import { Delete_Category_Controller } from '../controller/Delete_Category_Controller.js';
import { Update_Category_controller } from '../controller/Update_Category_controller.js';
import { EditCategory_controller } from '../controller/EditCategory_controller.js';
import { Apply_controller } from '../controller/Apply_controller.js';
import { applied_job_controller } from '../controller/applied_job_controller.js';






// POST Request ||  Signup
router.post('/signup', SignupController);
// POST Request  ||  user login
router.post('/login', LoginController);
// POST Request  ||  admin login
router.post('/adminlogin', AdminLoginController);
// GET Request  ||  All user
router.get('/all_users', AuthMiddleware, AllUsers);
// delete request || delete user 
router.get("/delete_user/:delId", AuthMiddleware, DeleteUser_Controller);
//Edit Request || Edit User 
router.get('/edit_user/:userId', AuthMiddleware, EditUser_controller);
// Update Request || Update User
router.post("/update_user", AuthMiddleware, Update_controller);

//Job New Post Request || Add Job
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({ storage: storage })
router.post('/post_new_job', upload.single('logo'), Post_Job_controller);

//Manage Jobs || Show Jobs
router.get('/manage_job', manage_job_controller);

// delete request || delete user 
router.get("/delete_job/:delId", Delete_job_Controller);

//Edit Request || Edit User 
router.get('/edit_jobs/:jobId', Edit_job_controller);

//update job user
router.put("/update_job", upload.single('logo'), update_job_controller)

//View Request || View User 
router.get('/view_job/:viewId', View_controller);
//Category Request || category User 
router.post('/add_category', Add_Category_controller);

//Manage category || Show category
router.get('/manage_category', Manage_Category_contoller);

//delete category
router.get('/delete_category/:CatdelId', Delete_Category_Controller)


//edit category
router.get('/edit_category/:catId', EditCategory_controller)

//update category
router.post('/update_category', Update_Category_controller)








//apply job
router.post('/apply_job', upload.single('logo'), Apply_controller);


//Applied Jobs || Show Jobs
router.get('/applied_job', applied_job_controller);













