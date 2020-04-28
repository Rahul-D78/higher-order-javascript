const util =require('util')


function download(url) {

    return new Promise((resolve, reject) =>{
    console.log(`Downloading from ${url}`);
    if(!url.startsWith('http')) {
      return reject(new Error('url must start with http'));
      }
    setTimeout(() => {
      let savedFile = url.split('/').pop()  
      console.log(`Download Over and saved as ${savedFile}`);
      resolve(savedFile);
    },3000)    
    })
}

function compress(file, format) {

   return new Promise((resolve,reject) =>{
      console.log(`compressing ${file}`);
   if(['zip', 'gzip', '7z'].indexOf(format) === -1) {
      return reject(new Error('we only suppor Zip, gzip, 7z'));
    }
      setTimeout(() => {
          let archieve = file.split('.')[0] + '.' + format
          console.log(`compressed and sved as ${archieve}`);
          resolve(archieve);
      },3000)  
   })
}
  
  function upload(server , file) {

      return new Promise((resolve, reject) => {
          console.log(`uploding ${file} to ${server}`);
      if(!server.startsWith('ftp://')) {
        return reject(new Error('we can only upload to ftp servers'));
        }
      setTimeout(() => {
          let remotepath = `${server}/${file}` ;
          console.log(`uploaded to server ${remotepath}`);
          resolve(remotepath);
      },1000)
      })
    }

const downloadcallback = util.callbackify(download)
const compresscallback = util.callbackify(compress)
const uploadcallback = util.callbackify(upload)

downloadcallback('http://sitepath/path/image.jpg', (err,file) => {
    if(err) throw err
    compresscallback(file, 'zip', (err, archieve) => {
        if(err){
            console.warn(err)
            archieve = err
        }
        uploadcallback('ftp://file.com', archieve ,(err)=>{
        if(err) throw err
        })
    })
});