
function ktsonguyenduong(value){
    return (Number.isInteger(value) && value >0);
}

alert(ktsonguyenduong(3.2))
console.log(Boolean(true))
let fullname = "";
let firtname = ""

const s = fullname || firtname || "người dùng ẩn danh";
alert(s)
// let message = "VÂNG chào tất các bạn nha";
// let mess = "hello everyone .";

// const results = prompt("vui lòng nhập ")
// alert(results);

// console.log("haáddddddddddddddddddddđi" >= "haieasssssssssssssssssssssssssssddđ");
