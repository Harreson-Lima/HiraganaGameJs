//REGRAS

// Ao iniciar serão embaralhados os 48 hiraganas em roomaji, do qual serão mostardos 1 a cada turno.

// A cada acerto contabiliza um ponto, e o hiragana muda para cor verde.

// A cada erro não será contabilizado, e o hiragana ficará vermelho.

// Quando todos os hiraganas forem selecinados, o game termina, e será mostrado na tela quantos pontos foram feitos.

// Se o usuário acerta menos de 25 hiraganas, mostra texto - terá que treinar mais.

// se o usuário acerta entre 26 e 40, ele será parabenizado - parabéns você chegou muito perto, treine um pouco mais.

// Se o usuário acerta entre 41 e 46 hiraganas, ele será um vencedor - Parabéns, você já é um mestre do Hiragana.



let progress = 0;
let score = 0;
let lockMode = false;
let squares = [];
let questions = [];

let hiragana = [
  {
    letter: "あ",
    roomaji: "A"
  },
  {
    letter: "か",
    roomaji: "Ka"
  },
  {
    letter: "さ",
    roomaji: "Sa"
  },
  {
    letter: "た",
    roomaji: "Ta"
  },
  {
    letter: "な",
    roomaji: "Na"
  },
  {
    letter: "は",
    roomaji: "Ha"
  },
  {
    letter: "ま",
    roomaji: "Ma"
  },
  {
    letter: "や",
    roomaji: "Ya"
  },
  {
    letter: "ら",
    roomaji: "Ra"
  },
  {
    letter: "わ",
    roomaji: "Wa"
  },
  {
    letter: "い",
    roomaji: "I"
  },
  {
    letter: "き",
    roomaji: "Ki"
  },
  {
    letter: "し",
    roomaji: "Shi"
  },
  {
    letter: "ち",
    roomaji: "Chi"
  },
  {
    letter: "に",
    roomaji: "Ni"
  },
  {
    letter: "ひ",
    roomaji: "Hi"
  },
  {
    letter: "み",
    roomaji: "Mi"
  },
  {
    letter: "り",
    roomaji: "Ri"
  },
  {
    letter: "う",
    roomaji: "U"
  },
  {
    letter: "く",
    roomaji: "Ku"
  },
  {
    letter: "す",
    roomaji: "Su"
  },
  {
    letter: "つ",
    roomaji: "Tsu"
  },
  {
    letter: "ぬ",
    roomaji: "Nu"
  },
  {
    letter: "ふ",
    roomaji: "Fu"
  },
  {
    letter: "む",
    roomaji: "Mu"
  },
  {
    letter: "ゆ",
    roomaji: "Yu"
  },
  {
    letter: "る",
    roomaji: "Ru"
  },
  {
    letter: "を",
    roomaji: "Wo"
  },
  {
    letter: "え",
    roomaji: "E"
  },
  {
    letter: "け",
    roomaji: "Ke"
  },
  {
    letter: "せ",
    roomaji: "Se"
  },
  {
    letter: "て",
    roomaji: "Te"
  },
  {
    letter: "ね",
    roomaji: "Ne"
  },
  {
    letter: "へ",
    roomaji: "He"
  },
  {
    letter: "め",
    roomaji: "Me"
  },
  {
    letter: "れ",
    roomaji: "Re"
  },
  {
    letter: "お",
    roomaji: "O"
  },
  {
    letter: "こ",
    roomaji: "Ko"
  },
  {
    letter: "そ",
    roomaji: "So"
  },
  {
    letter: "と",
    roomaji: "To"
  },
  {
    letter: "の",
    roomaji: "No"
  },
  {
    letter: "ほ",
    roomaji: "Ho"
  },
  {
    letter: "も",
    roomaji: "Mo"
  },
  {
    letter: "よ",
    roomaji: "Yo"
  },
  {
    letter: "ろ",
    roomaji: "Ro"
  },
  {
    letter: "ん",
    roomaji: "N"
  }

];



function createSquaresFromHiragana() {

  hiragana.forEach(square => {
    squares.push(createSquare(square));
  });

}

function createQuestionsFromHiragana() {
  
  hiragana.forEach(question => {
    questions.push(question.roomaji);
  });

  shuffleQuestions(questions);

}


function createSquare(square) {
  return {
    letter: square.letter,
    id: square.roomaji,
    checked: false
  }
}

function checkSquare(squareIndex) {

  if(!lockMode){
    if(!squares[squareIndex].checked){
      return true;
    }else{
      return false;
    }
  }

}

function checkMatch(id, squareIndex) {

  if (id === questions[progress]) {
    
    squares[squareIndex].checked = true;
    return true;

  }else{
    return false;
  }
}

function isGameOver(){
  
  if (progress === questions.length) {
    lockMode = true;
    progress--;
    return true
  }
  return false
}


function shuffleQuestions(question){
  let currentIndex = questions.length;
  let randomIndex = 0;
  console.log(currentIndex)

  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    [question[currentIndex], question[randomIndex]] = [question[randomIndex], question[currentIndex]];
  }
}

