


function setTime() {
    var dayTime = new Date();
    var h = dayTime.getHours();
    var m = dayTime.getMinutes();
    var s = dayTime.getSeconds();

    
    var part = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        part = 'PM';
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    var time = h + ":" + m + ":" + s + " " +  part;

    document.getElementById("demo").innerHTML = time;
    
    setInterval(setTime, 1000)

}

   setTime()