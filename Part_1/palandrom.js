function palandrom(phrase) {
 let reversed = phrase.split("").reverse().join("");
  if (reversed === phrase) {
    return true;
  } else {
    return false;
  }
}

phrase = "Madam, in Eden, I'm Adam";
palandrom(phrase);
