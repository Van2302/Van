const http = require('http');
  let array = [1,2,3,4,5,6] 

http.createServer((req, res) => {
    console.log(req.method, '=========')
     if(req.method==='POST') {
        array.push(req.url) 
     }
     if (req.metod==='GET'){
         array.get(req.url)
     }
     if (req.method==='DELETE') {  
        const index = Number(req.url.replace('/', ''))
        array.splice(index, 1)
    }
    if(req.method==='PUT') {
        const index = Number(req.url.replace('/',''))
        array[3]=44;

    }
    res.write(req.url)
    res.end()
    console.log(array, '')
}).listen(3001) 
