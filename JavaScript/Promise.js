function oneAsync(){
  return new Promise((res,rej) => {
    setTimeout(() => {
      console.log('one Async')
      res('abc')
    }, 1500)
  })


}

function twoAsync(){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('two Async');
      res('defghi');
    })
  })
}

function threeAsync(){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('three Async');
      res('casdasd');
    })
  })
}

oneAsync()
.then(param => {
  console.log(param);
  // twoAsync((res) => {
  //   return res
  // });
  return twoAsync();
})
.then(param => {
  console.log(param);
  return threeAsync();
})
.then(param => {
  console.log(param);
})
