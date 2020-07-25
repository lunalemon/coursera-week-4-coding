(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
    /*console.log ("Hello " + names[i]) left out, but is in lecture 50 */
    
    var firstLetter = names[i].charAt(0).toLowerCase();/* Step 11 Get the first letter of name */

    if (firstLetter === 'j') { /* Step 12 compare to lowercase j */
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
