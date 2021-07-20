var global = 'harin';

function print(){
  var insidePrintValue = 'jay';

  function innerPrint(){
    console.log('global', global);
    console.log('insidePrintValue', insidePrintValue);
  }
  innerPrint();

}

print();