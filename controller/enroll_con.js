let enrollModel=require('../database/db3')
let enroll=async(req,res)=>{

    try {
        let {name,email,number,course}=req.body
        let eno=await enrollModel.create({name,email,number,course})
        res.status(200).json({message:'enroll page',eno})
        
    } catch (error) {
        res.status(400).json({message:error})
        
    }
}
module.exports=enroll