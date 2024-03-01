let mongoose=require('mongoose')
// let contactModel=require('./db2')


let conn=async()=>{
    try {
      await  mongoose.connect(process.env.URI)
      console.log('databseis connected')
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=conn