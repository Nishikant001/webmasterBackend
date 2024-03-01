let express=require('express')
let router=express.Router()
let home=require('../controller/home_con')
let contact=require('../controller/contact_con')
let enroll=require('../controller/enroll_con')
router.route('/').get(home)
router.route('/contact').post(contact)
router.route('/enroll').post(enroll)

module.exports=router
