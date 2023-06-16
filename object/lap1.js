const objects = {
    name : "NGuyễn NGọc Thắng",
    age : 22,
    address : " HÀ TĨNH",
    interest : "BÓNG ĐÁ",
    "bodi masong" : "Nếu không đẹp thì hãy thơm"
}
console.log(objects)
// lấy name ra console 

// case1 :
console.log("TÊN CỦA BẠN LÀ :"+objects.name);
// case2 :
console.log(objects["age"] + " TUỔI");

objects.name = " LỮ HÀNH";
objects.status = " RẤT TỐT ";
objects["uocmo"] = "MUỐN THÀNH CÔNG";
console.log("Tên của bạn được đổi thành :" + objects.name)
console.log("trạng thái của bạn" + objects.name + objects.status)
console.log("Bây h : " +objects.name + " : " + objects["uocmo"])

// xoá 1 thuộc tính trong object
delete objects.interest;
console.log(objects.interest) // undefined

// khai báo biến = 1 thuộc tính của object
let uocmolon = "uocmo";
console.log(objects[uocmolon]);

console.log(objects["bodi" +" " + "masong"])


function makeComputer(name , age , address){
    return{
        name,age,address,
    }
}
let myComputer = makeComputer("Trần Hồng QUân" , "19 tuổi" , "Hà Tĩnh");
console.log(myComputer)
console.log(myComputer.name);
console.log(myComputer.age)
console.log(myComputer.address)


// dùng vong lặp for 
for(let prop in myComputer){
    console.log(prop, " : " , myComputer[prop]);
}
console.log("______________________________________")

for(const key in objects){
    console.log(key , " : " , objects[key])
}

// đếm số lượng trong mảng

function maxOf(){
    let max = -1;

    for (let i =0 ; i < arguments.length; i++){
        if(arguments[i] > max ) max = arguments[i];
    }
    return max;
}

console.log(maxOf(1,2,3,4,5,6,7));