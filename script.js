let ramadhan = new Date("april 03, 2022 18:47:52").getTime();
 func = setInterval(function () {
    let now = new Date().getTime();
    let Diff = ramadhan - now;
    if (Diff>0) {
       let days = Math.floor(Diff / (1000 * 60 * 60 * 24));
       let hours = Math.floor((Diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minutes = Math.floor((Diff % (1000 * 60 * 60)) / (1000 * 60));
       let seconds = Math.floor((Diff % (1000 * 60)) / 1000);
       document.getElementById("days").innerHTML = days + "d";
       document.getElementById("hours").innerHTML = hours + "h";
       document.getElementById("mins").innerHTML = minutes + "m";
       document.getElementById("secs").innerHTML = seconds + "s";
    }
    else{
       document.getElementById("ramadhan").innerHTML="رمضان كريم";

    }
})
let audio=new Audio("media/ramadhan.mp3");
 audio.play();
 audio.loop=true;