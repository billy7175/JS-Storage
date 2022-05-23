/**
 *  Higher-Order-Function
 *  1. Currency Unit.
 *  2. Prcies whci are over 1,000.
 *  3. Order by price.
 */
const price = ['2000', '1000','3000','5000','4000'];

const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => Number(price) > 1000
const ascendingList = (a, b) => a-b;

function getWonPrice(priceList){
  // const isOverList = priceList.filter(isOverOneThousand);
  // const sortList = isOverList.sort(ascendingList);
 
  // return sortList.map(suffixWon);

  return priceList
    .filter(isOverOneThousand)
    .sort(ascendingList)
    .map(suffixWon)
}

console.log(getWonPrice(price))