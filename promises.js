/**
 * Ideally we want write
 * const file = download('http://sitepath/image.jpg)
 * const zip = compress(file, zip)
 * upload('ftp://file.com', fa-boardzip)
 * 
 * promises help us get there 
 */
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

    // download('http://somesite/sitepath/image.jpg')
    // .then((file) => {
    //     compress(file, 'zip')
    //     .then((archieve) => {
    //         upload('ftp://files.com' , archieve) 

    //     })
    // })

    //Then call simplyb chain one after the other
    //above code is just got reduced
    //if some err happens there we can use the catch blocks
    download('http://sitepath/image.jpg')
    .catch((err) => {
        console.error('error in downloading the file')
        throw err
    })
    .then((file) => compress(file, 'zip'))
    .then((archieve) => upload('ftp://files.com' , archieve))
    .catch((err) => console.log(err))