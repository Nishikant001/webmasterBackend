let mongoose=require('mongoose')
let schema1=
    new mongoose.Schema({
            name:String,
            email:String,
            number:Number,
            message:String

        })
        
    


let contactModel=new mongoose.model('contactModel',schema1)


module.exports=contactModel