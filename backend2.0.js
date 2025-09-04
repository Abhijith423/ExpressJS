
Access an Another Html File using Express Frame work
//js file

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
   res.sendFile(path.join(__dirname,'Home.html'));
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

// Home.html File (demo Page)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
</head>
<body>
    <h1 style="text-align: center; color:blue;">Home Page</h1>
    <br>
    <br>
    <p style="text-align: center;">This is the home page of the Resort</p>
    <button type="Explore">Explore</button>
    
</body>
</html>



