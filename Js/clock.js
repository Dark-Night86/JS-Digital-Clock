'use strict'


//! variables =>

var h = document.querySelector('#hours');
var m = document.querySelector('#minutes');
var s = document.querySelector('#seconds');

//! adding the real time to html file =>

var time = new Date();
var s_number = time.getSeconds();
var m_number = time.getMinutes();
var h_number = time.getHours();

//! main counting operation =>

setInterval(() => {

    s.innerHTML = s_number;
    m.innerHTML = m_number;
    h.innerHTML = h_number;

    s_number += 1;

    if (s_number == 60) {
        clearInterval();
        s_number -= 60;
        m_number = m_number + 1;

        if (m_number == 60) {
            h_number = h_number + 1;
            m_number -= 60;
        }
    }

}, 1000);

