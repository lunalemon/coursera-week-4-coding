(function (window) { /* Step 2 content into IIFE */ 

    var helloSpeaker = {}; /* Step 3 helloSpeaker object created */  
    var speakWord = "Hello";/* Do not attach helloSpeaker to speakWord */
    /* Step 5 <speak.name = helloSpeaker>?? */
    helloSpeaker.speak = function (name) { /* Step 4 rewrite 'speak' method to connect to helloSpeaker object*/
        console.log(speakWord + " " + name); /*Lecture 52, Part 2*/
    }
    window.helloSpeaker = helloSpeaker;
})(window);