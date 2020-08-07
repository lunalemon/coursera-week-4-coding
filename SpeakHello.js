(function (window) { /* wrap in IIFE */ 

    var helloSpeaker = {}; /* 'helloSpeaker' object created */  
    var speakWord = "Hello";/* don't attach 'helloSpeaker' to speakWord */
    helloSpeaker.speak = function (name) { /*rewrite 'speak' method to connect to 'helloSpeaker' object*/
        console.log(speakWord + " " + name); /*Lecture 52, Part 2*/
    }
    window.helloSpeaker = helloSpeaker;
})(window);