// destructure: readFileSync is coming from the module fs

console.log('start\n');

// asynchronous 
const {readFile, writeFile} = require('fs');

// use callback
// whenever functionality is complete, then we run the callback
readFile('./content/first.txt', 'utf8', (err, result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  console.log(result);

  readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second = result;

    //other code here
    writeFile(
      './content/result-async.txt', 
      `Here is the result: ${first}, ${second} \n`, (err, result) => {
        if(err){
          console.log(err);
          return;
        }
        console.log('done with this task');
      })
  })
})

console.log('starting next task\n');