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
app.get('/api/:id/:major',(req,res,next)=>{
const id= req.params.id;
const major= req.params.major.toLowerCase();
if(allMajors[major]){
    if(major == 'it'){let stuData= itStudents.find(obj => obj.id === parseInt(id));
        if(typeof stuData === 'undefined'){res.send('This student is no in major IT');
}else{ 
    res.send(stuData);
}
}else{
    let stuData= ceStudents.find(obj => obj.id === parseInt(id));
        if(typeof stuData === 'undefined'){res.send('This student is no in major CE');
}else{
    res.send(stuData);}
    }
}else{
res.send('Major not found!!!');
 }
});
 //// step  3 listen
 app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);
});