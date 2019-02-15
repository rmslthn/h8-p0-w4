// Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    var arr=[];
    var result=[];
    for(var i=1; i<=angka; i++){
      if(angka%i === 0){
        arr.push(i);
      }
    }
    var count=1;
    for(var j=0; j < arr.length/2; j++){
     result.push(String(arr[j]) + String(arr[arr.length-count]))
     count++;
    }
    var min=result[0].length;
    for(var str of result){
      if(str.length<=min){
       min=str.length;
      }
    }
    return min;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2