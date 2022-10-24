// Modify this codde such that the program prints out 
// the time every second
let d = new Date();
setInterval(
    function () {
        console.log(d.toLocaleTimeString());
    },
    1000
)
//let time = d.toLocaleTimeString();
