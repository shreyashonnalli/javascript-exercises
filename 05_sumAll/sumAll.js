const sumAll = function(a,b) {
  if(Number.isInteger(a) == false || Number.isInteger(b) == false) return "ERROR";
  if(a<0||b<0) return "ERROR";
  if(a>b){
    let c = b;
    b = a;
    a = c;
  }
  let sum = 0;
  for(let i=a;i<=b;i++){
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
