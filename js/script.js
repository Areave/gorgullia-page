'use strict';


window.addEventListener('DOMContentLoaded', ()=>{


    // add scroll
    
    const linkArr = document.querySelectorAll('[data-scroll]');
    
    let scrollEvent = function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
    };

    linkArr.forEach(link => {
        link.addEventListener('click', scrollEvent);
    });





});