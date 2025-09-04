const express =require('express');
const app=express();
app.get('/login',(req,res)=>{
    res.send('Hello World');
    
});
app.listen(8080);        //65535 ports are present in computer which used to share data etc 
