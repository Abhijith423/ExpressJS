const express=require('express');

const path=require('path');

const app=express();

app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit',(req,res)=>{
   const username=req.body.username;
   const password=req.body.password;
   console.log(username,password);
   res.send('Login successful');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
