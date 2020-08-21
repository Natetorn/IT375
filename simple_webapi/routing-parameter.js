//step1 create objects
const express = require('express');
const app = express();

const port = process.env.port || 8000;
//step 2 routing

//IT students
const itStudents = [
    {id:61,name : 'Suchada IT'}
    ,{id:62,name :'Narawit IT'}
];
const CeStudents = [
    {id:71,name : 'Chonticha CE'}
    ,{id:72,name :'Kiattiphom CE'}
];
//majo
const allMajors = {
    'it' :itStudents,
    'ce' :CeStudents
};
//rout
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major=='it'){
        const JsonString = JSON.stringify(itStudents);
        req.myobj = JsonString;
        next();
    }else if(major == 'ce'){
        const JsonString= JSON.stringify(CeStudents);
        req.myobj = JsonString
        next();
    }else{
        res.send('Wrong parameter');
    }
},(req,res)=>{
    req.myobj += 'End of Data';
    res.send(req.myobj);
});
 //// step  3 listen
 app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);
});