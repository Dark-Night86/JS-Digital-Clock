
//! variables =>

var h = document.querySelector('#hours');
var m = document.querySelector('#minutes');
var s = document.querySelector('#seconds');

//! main counting operation =>

setInterval(() => {

    var time = new Date();
    s.innerHTML = time.getSeconds();
    m.innerHTML = time.getMinutes();
    h.innerHTML = time.getHours();

}, 1000);