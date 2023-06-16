function sum(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let pheptinh = document.getElementById('pheptinh').value;

    //kiểm tra dữ liệu

    if(a == " " || b == " "){
        alert('vui lòng nhập vào hai số  ');
        return false;
    }
    a = Number(a);
    b = Number(b);
    if(isNaN(a) || isNaN(b)){
        alert("bạn phải nhập vào dữ liệu là số");
        return false;
    }
    if(pheptinh == "+"){
         tong = parseInt(a ) + parseInt(b);
    }
    else if(pheptinh == "-"){
        tong = parseInt(a) - parseInt(b);
    }

    else if(pheptinh == "*"){
        tong = parseInt(a) * parseInt(b)
    }
    else{
        tong = parseInt(a) / parseInt(b)
    }

    document.getElementById('tong').innerHTML = Number(tong);
}