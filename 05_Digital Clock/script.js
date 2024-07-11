const clock = document.getElementById("clock");

setInterval(function(){
    let date1 = new Date();
    clock.innerHTML = date1.toLocaleTimeString();
},1000);