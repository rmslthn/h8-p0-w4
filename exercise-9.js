// Logic Challenge - Cek AB

function checkAB(str) {
    for(var i in str){
      if((str[i]==="a" && str[Number(i)+4]==="b") || (str[i]==="b" && str[Number(i)+4]==="a")){
       return true;
      }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false