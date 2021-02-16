const express=require('express');
const app=express();
const PORT=process.env.PORT || 5000
const mongoose=require('mongoose');
const cors=require('cors')
require('dotenv/config')

app.use(express.json());
app.use(express.urlencoded({extended:'false'}))
app.use(cors())
//init middleware
app.use('/posts',require('./routes/api/posts'))


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true,
    useUnifiedTopology: true},
()=>console.log('connected to DB!'))

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
