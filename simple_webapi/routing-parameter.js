//step 1 create object experss
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// step 2 routing

//IT student
const itStudents = [
    {id:61,name:'Chotdecha IT'},
    {id:62,name:'Suchada IT'}
];
//CE student
const ceStudents = [
    {id:71,name:'Narawit CE'},
    {id:72,name:'Chonticha CE'}
];

//majo
const allMajors = {
    'it':itStudents,
    'ce':ceStudents
};

//route
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLocaleLowerCase();
    if (major == 'it'){
        const jsonString = JSON.stringify(itStudents);
        req.myobj = jsonString;
        next();
    }else if (major=='ce'){
        const jsonString = JSON.stringify(ceStudents);
        req.myobj = jsonString;
        next();
    }else{
        res.send('Wrong parameter');
    }
},(req,res)=>{
    req.myobj += ' End of Data';
    res.send(req.myobj);
});

//step 3
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);
});