function translator(string){
  var findVowel = string.match(/[aeiou]/gi);
  // alert(vowel.slice(0,1)); //shows firs vowel in the word
  var firstVowel = findVowel.slice(0,1); //we need this idk why
  var vowel = string.indexOf(firstVowel); // returns -1 = never occurs, .search() - does same thing
  if(vowel === 0){
    return string.slice(1) + string.charAt(0) + "way";
  }else if(string.charAt(0)==="q" && string.charAt(1)==="u"){
    return string.slice(2) + string.charAt(0) + string.charAt(1) + "ay";
  } else {
    return string.slice(vowel) + string.slice(0,vowel) + "ay";
  }

}





$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

  var userInput = $("input#year").val();
 var inputArray = userInput.split(" ");
 var final = "";
   inputArray.forEach(function(word){
     final += translator(word)+ " ";

   });
    alert(final);
  });
 });


// Pool    Air    You   Question    Tree
// oolP-ay irAway ouY-ay  estionQu-ay eeTr-ay

// For words beginning with a vowel
//For words beginning with one or more consonants
//If the first consonants includes "qu", move the "u" along with the "q".
//For words beginning with "y", treat "y" as a consonant.
