let ramadhan = new Date("april 01, 2022 18:47:52").getTime();
 func = setInterval(function () {
    let now = new Date().getTime();
    let Diff = ramadhan - now;
    if (Diff>0) {
       let days = Math.floor(Diff / (1000 * 60 * 60 * 24));
       let hours = Math.floor((Diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minutes = Math.floor((Diff % (1000 * 60 * 60)) / (1000 * 60));
       let seconds = Math.floor((Diff % (1000 * 60)) / 1000);
       document.getElementById("days").innerHTML = days + "";
       document.getElementById("hours").innerHTML = hours + "";
       document.getElementById("mins").innerHTML = minutes + "";
       document.getElementById("secs").innerHTML = seconds + "";
    }
    else{
       document.getElementById("ramadhan").innerHTML="رمضان كريم";
       ramadhan += 30585600000;
    }
})
