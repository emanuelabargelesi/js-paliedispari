function palindroma(myString){

/* remove special characters, spaces and make lowercase*/
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString è palindroma*/
if(removeChar === checkPalindrome){

  document.write("<div>"+ myString + " è palindroma <div>");
}else{

  document.write("<div>" + myString + " non è palindroma </div>");
}
}
palindroma('Anna')
palindroma('Madam')
palindroma('Game of Thrones')
palindroma('"2,3,4,3,2"')
palindroma('"7,10,7,8,9"')
