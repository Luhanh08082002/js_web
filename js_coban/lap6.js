while(true){
let value = prompt('vui lòng nhap vào 1 số :');
if(isNaN(Number(value))){
    alert("kí tự bạn nhập ko phải là số",value);
}else if(value < 10){
    alert('ki tự nhập vào nhỏ hơn 10 ko hợp lệ')
}else{
    break;
}
}

for (let row = 0; row < 8; row++) {
    let str = "";
    for (let col = 0; col < 16; col++) {
      if (row % 2 == col % 2) {
        str += "#";
      } else {
        str += "_";
      }
    }
    console.log(str);
  }

// let value = prompt("vui lòng nhập một số nguyên dương ,", 0);
// if (value % 2 == 0) {
//     alert('bạn đã nhập đúng');
// } else {
//     alert('Bạn đã nhập sai');
// }

// let ar = prompt(value)+ value % 2 == 0 ? alert('bạn đã nhập đúng') : alert('bạn đã nhập sai')

// switch case và if else

let browser = "Chrome";
if (browser == 'IE') {
    console.log('NOt SUPPORT');

}
else if (browser == "Chrome" || browser == "Firefox" || browser == "safari" || browser == "Edge") {
    console.log("Support");
}
else {
    console.log("Unknowm browser");
}

// 
let x = 4;
switch (x) {
    case 1:
        console.log(" x ko là số nguyên tố ");
        break;
    case 2:
        console.log("X là số nguyên tố");
        break;
    case 3:
        console.log("x là số nguyên tố")
        break;
    case 4:
        console.log(" x ko là số nguyên tố")

        break;
    case 5:
        console.log(" x là số nguyên tố")
        break;
    case 6:
        console.log(" x ko là số nguyên tố")
        break;
    default:
        console.log("CHUA RO !");


}



//  vòng lặp while

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}
for (count=1 ; count <= 4; count++) {
    console.log("gia trị " + count);
}


for(number = 8 ; number++ ;){
    if(number % 7 == 0 ){
        // in ra số lẻ đầu tiên chia hết cho 7 > 8
        console.log('số chẵn đầu tiên chia hết cho 7' , + number)
        break;
        // ko thực thi nha
        if(number % 2 != 0 ){
            console.log("so lẻ đầu tiên chia hết cho 7" +number);
            break
        }
    }
}

let row = "";
for(i=1 ; i <= 10 ;i++){
    row = row + "* +";
    console.log(row);

}

