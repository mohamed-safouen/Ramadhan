let ramadhan = new Date("april 01, 2022 18:47:52").getTime();
let hijri = 1444;
 document.getElementById("ramadhan").innerHTML = "رمضان" + hijri;
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
       hijri++;
       ramadhan += 30585600000;
    }
})
