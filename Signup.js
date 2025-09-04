// signup page using express framework

const express=require('express');

const path=require('path');

const app=express();

app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/signup',(req,res)=>{
   const username=req.body.username;
   const password=req.body.password;
   const email=req.body.email;
   const address=req.body.address;
   console.log(username,password,email,address);
   res.send('Form submitted successfully');
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});
