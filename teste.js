function isPrime(num){
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for(var i=num-1; i >= 2; i--){
      if(num%i===0){
        return false
      }
    }
    return true
}

console.log(isPrime(10))
console.log(isPrime(17))
console.log(isPrime(25))
console.log(isPrime(37))

