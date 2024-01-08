const Anagram = (string1, string2) => {
    string1 = string1.replace(/[^A-Z0-9]/gi, "").toLowerCase();
    string2 = string2.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  
    if (string1.length !== string2.length) {
      return false;
    }
  
    string1 = string1.split("").sort().join("");
    string2 = string2.split("").sort().join("");
  
    return string1 === string2;
  };
  
  console.log(Anagram("anagram", "nagaram"));
  console.log(Anagram("rat", "car"));