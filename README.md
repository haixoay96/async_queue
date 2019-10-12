# async_queue
queue which for async/await in loop 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop(message){
   while(true){
      console.log(message);
      await sleep(1000)
   }
}


loop(1);
loop(2);

// two loop will not block event loop 
