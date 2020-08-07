(function (window) { /*wrap in IIFE*/
var byeSpeaker = {}; /*'byeSpeaker' object created */
var speakWord = "Good Bye";/*don't attach speakWord to byeSpeaker */
byeSpeaker.speak = function (name) {/*rewrite, attach 'speak' method and expose to global */ 
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);