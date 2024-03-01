let mongoose=require('mongoose')
let schema2=
    new mongoose.Schema({
            name:String,
            email:String,
            number:Number,
            course:String

        })
        
    


let enrollModel=new mongoose.model('enrollModel',schema2)


module.exports=enrollModel