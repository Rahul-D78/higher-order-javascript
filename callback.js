/**
 * understanding Asynchronous javascript - with callbacks
 * 
 * A programm that downloads a file 
 * compress it and upload it somewhere else. 
 */

function download(url) {
  console.log(`Downloaded from ${url}`);
  setTimeout(() => {
    console.log(`Download Over and saved as ${url.split('/').pop()}`);
  },3000)
}

function compress(filepath, format) {
 console.log(`compressing ${filepath}`);
    setTimeout(() => {
        console.log(`compressed and sved as ${filepath.split('.')[0] + '.' + format}`);
        
    },2000)
}

function upload(server , file) {
    console.log(`uploding ${file} to ${server}`);
    setTimeout(() => {
        console.log(`uploading completed to server ${server}/${file}`);
        
    },1000)
}

//console.log('start');
// setTimeout(function() {
//     console.log('done');
// },3000);
// console.log('end');
download('http://sitepath/path/image.jpg');
compress('myfile.png', 'zip');
upload('localhost:3000' , 'myfile.zip');