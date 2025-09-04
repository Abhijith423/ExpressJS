const express=require('express');

const path=require('path');

const app=express();

app.use(express.urlencoded({extended:true}));

                                                      After you login your password and username data successfull shown in backend terminal it shows the data entered in backend

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
