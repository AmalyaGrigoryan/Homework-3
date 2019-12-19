//2. Print all number between 1 and 10 except 6.

var number = 1;

for(var i = 1; i <= 10; i++){
    number = i;
        if( i === 6){
            continue;
        }
    console.log(i);
    
}