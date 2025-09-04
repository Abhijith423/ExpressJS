// which after enters a mesage and then show a messgae or a file we described

const express=require('express');

const path=require('path');

const app=express();

app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.post('/login',(req,res)=>{
   const msg=req.body.msg;
   console.log(msg);
   res.send("done");
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
