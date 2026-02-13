const http=require('http');
const myserver=http.createServer((req,res)=>{
//    console.log("server1")
//    res.end("this is my first server");
if(req.url=='/'){
    res.end("ABES college");
    
}
else if(req.url=="/about"){
    res.writeHead(200,{"content-type":"text/html"});
    res.end(`<img src="https://www.abes.ac.in/assets/HomePage/2%20About%20ABES.jpg"></img>`);
}
else{
    res.end("404 page is not found")
}

})

    myserver.listen(8000,() => console.log("server is run"))