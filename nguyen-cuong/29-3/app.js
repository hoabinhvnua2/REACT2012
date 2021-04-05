// function pow(n, a) {
//   let result = 1;
//   for (var i = 1; i <= a; i++) {
//     result *= n;
//   }
//   return result;
// }

function pow2(n, a) {
  if(a==0){
    return 1
  }
  if (a === 1) {
    return n;
  } else {
    return pow2(n, a - 1) * n;
  }
}
console.log(pow2(2, 3));
