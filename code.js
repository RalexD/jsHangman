// create mass of words
var words = [
    "game",
    "plane",
    "juice",
    "park",
    "search"
    ];
    // select random word
    var word = words[Math.floor(Math.random() * words.length)]; //math.random- [0 to 1.00);  
    // our word mass with _
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    //game 
    while (remainingLetters > 0) {
    // while all letters are nor found
    alert(answerArray.join(" ")); // space between letters
    
    // Запрашиваем вариант ответа
    var guess = prompt("Guess letter or quit.");
    if (guess === null) {
    // Выходим из игрового цикла
    break;
    } else if (guess.length !== 1) {
    alert("Please, enter one letter.");
    } else {
    // update game satus
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }
    }
    }
    //
    }
    // end of guessing
    alert(answerArray.join(" "));
    alert("Well done! You guessed word: " + word);