export  const RandomId = () => {

    const randomId = [];
    const alphabet = ["a", "b", "c", "d", "e" , "f" , "g", "h", "i", "j", "j" , "k" , "l" , "m", "n", "o", "p" , "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

    for (let i = 0; i < 12; i++) {
      let isNumber = Math.floor(Math.random() * 10);
      let randomLetter = alphabet[ Math.floor(Math.random() * 27)];

      if(isNumber % 2 === 0){
        randomId.push(randomLetter)
      }else{
        randomId.push(isNumber)
      }
      
    }

    return randomId.join("")

}