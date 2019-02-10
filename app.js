const fs = require('fs');



// making a directory
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("succesfully created the file");
    }
})

//removing the directory
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Successfully deleted the folder");
            }
        })
    }
})

//make file under a directory
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        
        fs.writeFile('./tutorial/example.txt','123',(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("sucessfully created file in folder");
            }
        })
    }
            
})

//delete the folder
fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
        console.log(err)
    else
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('deleted folder!');
            }
        })
})

// deleting files under folder

fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('successfuly deleted all the files');
            })
        }
    }
})


//Read write streams
const readStream = fs.createReadStream('./example.txt','utf8');
const WriteStream = fs.createWriteStream('./example2.txt','utf8');
readStream.on('data',(chunk)=>{
    WriteStream.write(chunk)
})

//Why you should use streams
// cant use readFile mthod for large file hence we need to use the readable and writable streams
