$(document).ready(function () {
    console.log("doc is ready");
   
    let revName; 
    $
      ("#btnFacts").click(function (){
  
        let userName = $("#userName").val();
        let coolFacts = genNameFacts(userName); 
  
        console.log('You clicked the button');
        console.log('from ln 12', genNameFacts(userName));
        
        $("#coolNameFactsOutput").html(coolFacts);
    
      });
  
  });
  
  function genNameFacts(userName) {
    let coolFacts = ''; 
    
    if (userName.length === 0) {
      coolFacts += " <br> " + "Invalid Input: Please enter a name";
    }
    else {
      coolFacts = nameVowel(userName);
      coolFacts += " <br> " + nameStart(userName);
      coolFacts += " <br> " + getAnimal(userName);
    }
  
    console.log("initialized the coolFacts variable: " + coolFacts); 
  
    return coolFacts;
  }
  
  function nameVowel(name) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = name.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return "You have " + vowelsCount + " vowel(s) in your name!";
  }
  
  function nameStart(name) {
    return "The first letter of your name is " + name[0];
  }
  
  //if then statment
  function getAnimal(name) {
    if (name.length <= 5) {
      return "Wow, " + name + ", your spirit animal is a fox!";
    } 
    else {
      return "Saddle up, " + name + ", your spirit animal is a horse!";
      }
    
   }
  
  function refreshPage(){
    $("#coolNameFactsOutput").html("");
    var getValue = document.getElementById("userName");
      if (getValue.value !="") {
        getValue.value = "";
      }
  }