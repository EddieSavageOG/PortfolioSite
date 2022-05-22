// Countdown timer that *I* am actually creating!


function countdownToHalloween() {
    const halloween = new Date("October 31, 2022 0:00:00");
    
    let now = new Date();
    let difference = halloween-now;

    

//not this part, though, I looked it up - time is too complex and this is a lot of math.

let days = Math.floor(difference/ (1000 * 60 * 60 * 24));
let hours = Math.floor((difference % (1000*60*60*24) /(1000*60*60)));
let minutes = Math.floor((difference % (1000*60*60))/(1000*60));
let secs = Math.floor((difference%(1000*60))/(1000));

dday=`${days} days, ${hours} hours, ${minutes} minutes, and ${secs} seconds!`

document.getElementsByClassName('time')[0].innerText=dday
}

setInterval ('countdownToHalloween()', 1000);



countdownToHalloween();