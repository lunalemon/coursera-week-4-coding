(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {

    /*console.log ("Hello " + names[i]) if testing */
    
    var firstLetter = names[i].charAt(0).toLowerCase();/* Retrieves the first letter of each name */

    if (firstLetter === 'j') { /* Finds lowercase j in the names*/
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
