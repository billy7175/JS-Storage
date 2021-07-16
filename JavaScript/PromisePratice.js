function createPromise (param){
  return new Promise((resolve, reject) => {
    console.log("This is a Promise");
    setTimeout(()=> {
      if(param){
        resolve("resolve123");
      } else {
        reject(new Error("error123"));
      }
    }, 1000)
  })
};


const promiseA = createPromise(false);

promiseA
.then(v => console.log(v))
.catch(e => console.log(e))