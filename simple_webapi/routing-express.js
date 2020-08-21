const express = require('express');
const app = express();

const port = process.env.port || 8000;

//step 2 using object express's methods
app.get('/',(req,res)=>{
    res.send('Home Page');
});
app.get('/product',(req,res)=>{
    res.send('Product page')
 });
 app.get('/overview',(req,res)=>{
    res.send('Overview page')
 });
 app.get('/api/user',(req,res)=>{
     const userData = {id:15,name:'Suchada'}
    res.send(userData)
 });
     
 //// step  3 listen
 app.listen(port,'127.0.0.1',()=>{
     console.log(`Listening on port ${port}`);
 });