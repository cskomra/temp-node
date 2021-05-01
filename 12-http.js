const http = require('http');

// req - the incomming request; have info about the method, etc.
// res - what we're sending back
// createServer takes a callback function
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to our home page')
  }else
  if(req.url === '/about'){
    res.end('Here is our short history')
  }else{
    res.end(`
      <h1>Ooops!</h1>
      <p>We can't seem to find the page you're looking for</p>
      <a href='/'>back home</a>`)
  }
})

// servers must have a port on which they listen; 
// must say what port our server is listening to
// listening port # is arbitrary
server.listen(5000);