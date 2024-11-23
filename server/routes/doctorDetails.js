const express=require("express");
const router=express.Router();
const{
    docDetails,
    getDoctors
}=require("../controllers/doctorsDetailsController");

//route for registration
router.post("/details",docDetails);
router.get("/details",getDoctors);
//route for user login 
//router.post("/login",loginUser);
module.exports=router;