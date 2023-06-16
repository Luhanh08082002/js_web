document.getElementById('content').innerHTML = "Nội Dung Lap 1 Là tập code";
document.getElementById('good').innerHTML = "Bạn đã làm được";

let x ;
 let y ;
function foo( x ,y ){
    let z = 0 ;
    if(( x < 0 ) && (y > 0 )){
        z = x
    }
    console.log( z ) ;

}
foo( 7);