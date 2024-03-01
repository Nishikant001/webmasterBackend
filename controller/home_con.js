let home=async(req,res)=>{
    try {
        res.status(200).json({message:'home page'})
        
    } catch (error) {
        res.status(400).json({message:error})
        
    }
}




module.exports=home