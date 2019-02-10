const fs = require('fs');
//for create a file
fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err){
        console.log("Error opps");
    }else{
        console.log('File successfully created')
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err){
                console.log(err);
            }else{
                console.log(file);
            }
        })
    }
})

//for renaming the file
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err)
    else    
        console.log('successfully renamed the app')
})

//for apppending a file
fs.appendFile('example2.txt','Some data being appended',(err)=>{
    if(err){
    console.log(err);
    }
    else{
        console.log("appended the data successfully");
        
    }
});

//for deleting the file
fs.unlink('example2.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Success delete");
    }
})
