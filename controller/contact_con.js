let contactModel=require('../database/db2')
let contact=async(req,res)=>{
    try {
        let {name,email,number,message}=req.body
        let con1=await contactModel.create({name,email,number,message})
       return res.status(200).json({message:"sucess contact",con1})
        
    } catch (error) {
       return res.status(400).json(error)
        
    }
}
module.exports=contact