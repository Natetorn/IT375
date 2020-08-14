const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve({id:1,"name":"suchada"});
        reject(new Error('Error 404 Bad Reques'))
    },2000);
});
console.log('Before Async Operation');
p.then((result)=>{
    console.log('This is result:',result);
})
.catch((err)=> {
    console.log(err.message);
});
console.log('After Asynchronous Operation');
