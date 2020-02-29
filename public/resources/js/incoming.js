$(document).ready(function() {
    
    /* --- coming soon! --- */

    const incoming1 = document.querySelector('.incoming-1');
    const incoming2 = document.querySelector('.incoming-2');
    const incoming3 = document.querySelector('.incoming-3');
    const incomngAlert = () => {
        alert("Coming soon!");
    }

    incoming1.addEventListener('click', incomngAlert);
    incoming2.addEventListener('click', incomngAlert);
    incoming3.addEventListener('click', incomngAlert);
});