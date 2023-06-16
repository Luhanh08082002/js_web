let p1 = {name:"lu hanh" , age : "22", address : "Thach ha",x:1 };
let p2 = p1;
let p3 = p2;
let p4 = {x:1,y:2,z:3};
let p5= {x:1,y:2,z:3};
let p6= {x:2,y:3,z:3};

p2.name = "NGỌC THẮNG";
p3.age = "23";

console.log(p2 ==p3)
console.log(p2 ===p3)
console.log(p3 === p4)
console.log(p5.x === p4.x)

console.log(p2.name)
console.log(p1.name)
console.log(p3.age)
console.log(p2.age)
console.log(Object.is(p3 , p1));
console.log(Object.is(p4.y , p5.y));

if(p4.x === p5.x && p4.y === p5.y && p4.z === p5.z){
    console.log(" p4 bằng p5");
}else{
    console.log(" p4 khác p5");
}

if(p6.x === p5.x && p6.y === p5.y && p6.z === p5.z){
    console.log(" p4 bằng p5");
}else{
    console.log(" p6 khác p5");
}

// sử dụng hàm để loại bỏ vòng bị lặp
function ishamso(is_p , is_v){
    return is_p.x === is_v.x && is_p.y === is_v.y && is_p.z === is_v.z;
}

console.log("so sánh hai object p4 & p5 : " + ishamso(p4,p5));
console.log("so sánh hai object p5 & p6: " + ishamso(p5,p6));



// tham chiếu vs object.is

let p = {};
let c = p;
let a = {};

console.log(Object.is(c,p));
console.log(Object.is(c,a));

// 
console.log(Math.floor(Math.random()*100))