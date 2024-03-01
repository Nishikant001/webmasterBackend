require('dotenv').config()
let express=require('express')
let app=express()
let cors=require('cors')
let port=process.env.PORT || 1200
let router=require('./router/route')
let conn=require('./database/db')
app.use(cors({
    origin: 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}))
app.use(express.json())
app.use('/api/user',router)




conn().then(()=>
    app.listen(port,()=>console.log('server is connected'))
)
