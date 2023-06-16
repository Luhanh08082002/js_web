//  đồng hồ bấm h 

var seconds = 00;
var tens = 00;
var minute = 00;
 let hour = 0;
 let appendHour = document.getElementById('hour');
let appendMinute = document.getElementById('minute');
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('second');
let btn_start = document.getElementById('btn_start');
let btn_stop = document.getElementById('btn_stop');
let btn_reset = document.getElementById('btn_reset');
var Interval;

appendHour.style.display = 'none';

btn_start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

btn_stop.onclick = function () {
    clearInterval(Interval);
}
btn_reset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minute = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}


function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    } if (tens > 9) {
        appendTens.innerHTML = tens;
    } if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    } if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        appendHour.style.display = "block"
        minute++
        appendMinute.innerHTML = "0" + minute;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minute > 9) {
        appendMinute.innerHTML = minute;
    }

    if(minute > 59){
        hour++;
        appendHour.innerHTML = "0"+ hour +"h";
        minute = 0;
        appendMinute.innerHTML = "0" + 0;
    }


}


// clock ?? gio quoc te

function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let  s = date.getSeconds();
    let session = "AM";

    if(h == 0){
        h =12;
    }
    if(h >12){
        h =h -12;
        session = "PM";

    }

    h = (h<10 ) ? "0" + h : h ;
    m = (m < 10 ) ? "0 " + m : m;
    s = (s<10) ? "0" +s :s;

    let time = h + ":" + m + ":" +s + " " + session;

    document.getElementById("MyClockDisplay") .innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();

// dieu huong tab content

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab_item');
const panes = $$('.tab_pane');

tabs.forEach((tab , index)=>{
    const pane = panes[index]

    tab.onclick = function(){
        
        $('.tab_item.active').classList.remove('active');
        $('.tab_pane.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
});
