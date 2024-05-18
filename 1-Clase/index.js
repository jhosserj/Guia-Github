// debe devolver el numero mayor y menor 
// y restarlos;

function soloNumeros(num){
   let max = num[0];
   let min = num[0];

   for (let i = 0; i < num.length; i++){
    if(num[i] > max){
        num[i] = max;
    }else if (num[i] < min){
        num[i] = min;
    };
   };
    return max - min;
}