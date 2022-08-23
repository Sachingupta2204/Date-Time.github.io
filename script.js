/* function UpdateTime() {
    // seInterval(() => {
    //     let a;
    //     let time;
    //     let date;
    //     a = new date();
    //     date = a.toLocaleDateString();
    //     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

    // }, 1000);


    //  setTimeout(alert, 1000); // Will alert once, after a second.
    setInterval(function() {
        var date = new Date()
        var html = ` ${date.toLocaleDateString()} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
            // $("#demo").html(html);
        document.getElementById("demo").innerHTML = html;


    }, 1000); //run this thang every 2 seconds
}*/

/*window.onload = function() {
    UpdateTime();
};

function UpdateTime() {
    setInterval(() => {
        var date = new Date()
        var time = ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        date = date.toLocaleDateString();
        document.getElementById("demo").innerHTML = time + ' on ' + date;
    }, 1000);
} */
// $(document).ready(function() {
//     UpdateTime();
// });

function updateTime() {
    setInterval(() => {
        var date = new Date()
        var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        date = date.toLocaleDateString(undefined, options)

        document.getElementById("demo").innerHTML = time + ' on ' + date;
    }, 1000);
}

window.onload = function() {
    updateTime();
}