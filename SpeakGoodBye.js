(function (window) { /*Step 6 Wrap in IIFE*/
var byeSpeaker = {}; /*Step 7 'byeSpeaker' object created */
var speakWord = "Good Bye";/*Don't attach speakWord to byeSpeaker */
byeSpeaker.speak = function (name) {/*Step 8 rewrite, attach 'speak' method and expose to global */ 
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);