setInterval(clock, 1000);
function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    n = "am";
    if(hour > 12){
        hour = hour - 12;
        n = "Pm";
    }
    if(hour == 0){
        hour = 12;
        n = "Am";
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    let time = hour + ":" + minute + ":" + second + " " + n;
    document.getElementById("clock")
    .innerHTML = time;
}
clock();