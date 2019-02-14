// Logic Challenge - Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    var arr=[];
  
    for(var i=1; i<=angka1; i++){
      if(angka1%i===0){
        arr.push(i);
      }
    }
  
    for(var j=1; j<=angka2; j++){
      if(angka2%j===0){
        arr.push(j);
      }
    }
    
    var obj={};
    for(var num of arr){
      // console.log(num);
      if(!obj[num]){
        obj[num]=0;
      }
      obj[num]++;
    }
    // console.log(obj);
    var winnerNum=0;
    var winnerName;
    for(var key in obj){
      if(obj[key]===2 && Number(key)>winnerNum){
        winnerNum = Number(key);
        winnerName = key;
      }
    }
    return winnerName;
  }
  
  // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1