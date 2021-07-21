const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Billy'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
// instanceA and instanceB are same 
//you cant not have more than one instance with this pattern.
// console.log(instanceA);