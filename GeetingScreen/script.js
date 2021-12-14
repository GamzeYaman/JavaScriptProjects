var yourName = prompt("İsminizi giriniz: ");
var name1 = document.querySelector("#greetingName");
name1.innerHTML = yourName;


function settingDate(){
    var generalDate = new Date();
    var hour = generalDate.getHours();
    var minute = generalDate.getMinutes();
    var second = generalDate.getSeconds();
    var day = generalDate.getDay();

    if(day == 1){
        day = "Pazartesi";
    }else if(day == 2){
        day = "Salı";
    }else if(day == 3){
        day = "Çarşamba";
    }else if(day == 4){
        day = "Perşembe";
    }else if(day == 5){
        day = "Cuma";
    }else if(day == 6){
        day = "Cumartesi";
    }else if(day == 7){
        day = "Pazar";
    }
   

    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById("date").innerHTML = hour + ":" + minute + ":" + second + " | " + day;
    time = setTimeout(function(){settingDate()}, 500);//zaman akışını sağlar
}

function checkTime(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}

settingDate();

