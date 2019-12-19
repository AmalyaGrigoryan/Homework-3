//5. Calculate sum of all numbers between 1 and 10 except 8.
var number = 0;

for(var i = 1; i <= 10; i++){
    number = number + i;
        if( number === 6){
            continue;
        }
  
    console.log(number);
}

