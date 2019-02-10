//using pipe
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const WriteStream = fs.createWriteStream('./uncompressed.txt','utf8');
readStream.on('data',(chunk)=>{
    WriteStream.write(chunk)
})
//for compressing files
readStream.pipe(gzip).pipe(WriteStream);

//using pipe chaining
readStream.pipe(WriteStream);

//de compress file
readStream.pipe(gunzip).pipe(WriteStream);
