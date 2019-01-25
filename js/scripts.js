function translator(string){
  var findVowel = string.match(/[aeiou]/gi);
  // alert(vowel.slice(0,1)); //shows firs vowel in the word
  var firstVowel = findVowel.slice(0,1);
  var vowel = string.indexOf(firstVowel); // returns -1 = never occurs, .search() - does same thing
  if(vowel === 0){
    alert(string.slice(1) + string.charAt(0) + "way");
  }else if (vowel === 1){
    if(string.charAt(0)==="q" && string.charAt(1)==="u"){
      alert(string.slice(2) + string.charAt(0) + string.charAt(1) + "ay");
    } else {
      alert(string.slice(1) + string.charAt(0) + "ay");
    }

  } else {
    alert(string.slice(vowel) + string.charAt() + "ay");
  }
}






$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

  var userInput = $("input#year").val();
 var inputArray = userInput.split("");

    translator(userInput);






  });
});



// Pool    Air    You   Question    Tree
// oolP-ay irAway ouY-ay  estionQu-ay eeTr-ay

// For words beginning with a vowel
//For words beginning with one or more consonants
//If the first consonants include "qu", move the "u" along with the "q".
//For words beginning with "y", treat "y" as a consonant.



// var vowels = ['e','i','o','a','u'];
// // alert(inputArray.indexOf("a"));
//
// vowels.forEach(function(vowel) {
//   if(vowell===inputArray){
//     alert(userInput.charAt(vowel));
//   }
//
//   //alert(inputArray.indexOf(vowel));
//
// });


// var vowels = ['e','i','o','a','u'];
//
//   vowels.forEach(function(vowel) {
//     if(vowel === userInput.charAt(0)){
//       alert(userInput.slice(1) + userInput.charAt(0) + "way");
//     } else {
//       if(charAt(1)===vowel){
//         alert(userInput.slice(1) + userInput.charAt(0) + "ay");
//       } else {
//         alert(userInput.slice(userInput.indexOf(vowel)) + userInput.charAt(userInput.indexof(vowel)) + "ay");
//       }
//
//     }
// });
