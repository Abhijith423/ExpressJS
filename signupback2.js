signup and the details entered will be shown in terminal backend
  //html file
<form action="/submit" method="POST">
  <input type="text" id="name" name="name" placeholder="name" required>
  <input type="text" id="email" name="email" placeholder="email" required>
  <input type="password" id="password" name="password" placeholder="password" required>
  <button id="submit">Submit</button>
</form>

//js file
const express = require('express');
const path=require('path');
const app =express();

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.post('/submit',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(name, email, password);
    res.send('Form submitted successfully!');
});
app.listen(3000,()=>{
    console.log('server started');
});
