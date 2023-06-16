function afunction(a ,b){
    if(a === null || a === undefined){
        alert('hàm ko có tham số truyền vào a');
        return;
    }
    if(b === null || b === undefined){
        alert('Hàm ko có tham số truyền vào b');
        return
    }
    return a + b ;

}

const ketqua = afunction(34,4)

alert(ketqua);

function min(a,b){
    return a > b ? a : b;
}
const ketquas = min(2,6);
alert(ketquas);


// arow function 
 let mins = (a,b)=>{
     return a < b ? a : b ;
}
console.log(mins(2,4));



// kiểm tra có phải là số nguyên tố hay ko

const isPrime = number =>{
    if(isNaN(number))
    return false;
    if(number < 2) return false;
    if(number === 2) return true;

    for(i = 2 ; i*i <= number ; i++){
        if(number % i ===0 ) return false;
    } 

    return true;
};

for(let i =1  ; i <=10; i++){
    if(isPrime(i)){
        console.log(i);
    }
}