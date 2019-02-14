// Logic Challenge - Angka Prima

function angkaPrima(angka) {
    if(angka<=1){
      return false;
    }
    var result=[];
    for(var i=1; i<=angka; i++){
      if(angka % i === 0){
        result.push(i);
      }
    }
    if(result.length > 2){
      return false;
    }
    return true;
}
  
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
