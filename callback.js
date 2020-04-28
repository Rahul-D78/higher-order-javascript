/**
 * understanding Asynchronous javascript - with callbacks
 * 
 * A programm that downloads a file 
 * compress it and upload it somewhere else. 
 */

function download(url, downloaded) {
  console.log(`Downloading from ${url}`);
  setTimeout(() => {
    let savedFile = url.split('/').pop();  
    console.log(`Download Over and saved as ${savedFile}`);
    downloaded(savedFile);
  },3000)
}

function compress(filepath, format, compressed) {
 console.log(`compressing ${filepath}`);
    setTimeout(() => {
        let archieve = filepath.split('.')[0] + '.' + format
        console.log(`compressed and sved as ${archieve}`);
        compressed(archieve);
    },2000)
}

function upload(server , file, uploaded) {
    console.log(`uploding ${file} to ${server}`);
    setTimeout(() => {
        let remotepath = `${server} / ${file}` ;
        console.log(`uploaded to server ${remotepath}`);
        uploaded(remotepath);
    },1000)
}

//console.log('start');
// setTimeout(function() {
//     console.log('done');
// },3000);
// console.log('end');
download('http://sitepath/path/image.jpg', (file) => {
    compress(file, 'zip', (archieve) => {
        upload('http://filepath', archieve ,()=>{

        })
    })
});