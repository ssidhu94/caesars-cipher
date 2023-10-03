function rot13(str) {

  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let accumulator = "";

  for(let i = 0; i < str.length; i++) {
    const isALetter = alphabet.includes(str[i]);
    if(isALetter === false) {
      accumulator += str[i];
    } else {
      const charIndex = alphabet.findIndex((a) => a === str[i]);
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    } 
  }
  return accumulator;
}


//rot13("ABC")
rot13("SERR PBQR PNZC");
