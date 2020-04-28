/**
 * understanding Asynchronous javascript - with callbacks
 * 
 * A programm that downloads a file 
 * compress it and upload it somewhere else. 
 */

function download(url, downloaded) {
  console.log(`Downloading from ${url}`);
  if(!url.startsWith('http')) {
    return  downloaded(new Error('url must start with http'));
    }
  setTimeout(() => {
    let savedFile = url.split('/').pop()  
    console.log(`Download Over and saved as ${savedFile}`);
    downloaded(null, savedFile);
  },3000)
}

function compress(file, format, compressed) {
 console.log(`compressing ${file}`);
 if(['zip', 'gzip', '7z'].indexOf(format) === -1) {
    return compressed(new Error('we only suppor Zip, gzip, 7z'));
  }
    setTimeout(() => {
        let archieve = file.split('.')[0] + '.' + format
        console.log(`compressed and sved as ${archieve}`);
        compressed(null,archieve);
    },3000)
}

function upload(server , file, uploaded) {
    console.log(`uploding ${file} to ${server}`);
    if(!server.startsWith('ftp://')) {
      return uploaded(new Error('we can only upload to ftp servers'));
      }
    setTimeout(() => {
        let remotepath = `${server}/${file}` ;
        console.log(`uploaded to server ${remotepath}`);
        uploaded(null, remotepath);
    },1000)
}

//console.log('start');
// setTimeout(function() {
//     console.log('done');
// },3000);
// console.log('end');
download('http://sitepath/path/image.jpg', (err,file) => {
    if(err) throw err
    compress(file, 'zip', (err, archieve) => {
        if(err){
            console.warn(err)
            archieve = err
        }
        upload('ftp://file.com', archieve ,(err)=>{
        if(err) throw err
        })
    })
});