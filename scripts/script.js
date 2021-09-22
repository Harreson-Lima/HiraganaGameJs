const SQUARECLASS = "square";


startGame();

function startGame() {

  squares = [];
  questions = [];

  createSquaresFromHiragana();
  createQuestionsFromHiragana();

  showProgress();
  showLetter();
  
  initializeSquares(squares);

}

function initializeSquares(squares) {
  let boardSquares = document.querySelector(".squares");
  
  boardSquares.innerHTML = "";

  squares.forEach(square => {
    let squareElement = document.createElement("div");
    
    squareElement.classList.add(SQUARECLASS);  
    squareElement.id = square.id;
    squareElement.innerHTML =  square.letter;
    
    squareElement.addEventListener("click", selectedSquare);

    boardSquares.appendChild(squareElement);
  })



}

function showProgress() {
  let progressViewer = document.querySelector(".progress");

  progressViewer.innerHTML = "";

  progressViewer.innerHTML = `<p>${progress + 1}/${questions.length} </p>`;

}

function showLetter() {
  let letterViewer = document.querySelector(".letter");

  letterViewer.innerHTML = "";

  letterViewer.innerHTML = `<h2>${questions[progress]}</h2>`;

}

function showGameOver(){
  let progressViewer = document.querySelector(".progress");
  let letterViewer = document.querySelector(".letter");

  progressViewer.innerHTML = "";
  letterViewer.innerHTML = "";

  progressViewer.innerHTML = `<p>46/46</p>`;
  letterViewer.innerHTML = `<h2>Game Over!</h2>`;



  let textElement = document.querySelector(".congrats");
  let gameOver = document.querySelector(".gameOver");
  
  gameOver.style.display = "flex";
  
  if (score < 25) {
    textElement.innerHTML = `Você acertou ${score}/${questions.length}.<br> Esse é o caminho, não desanime, você vai chegar lá!`;
  } else if (score >= 25 && score <=40) {
    textElement.innerHTML = `Você acertou ${score}/${questions.length}.<br> Parabéns! Você já está ficando perito no Hiragana, continue assim, e você vai longe!`;
  } else if (score > 40) {
    textElement.innerHTML = `Você acertou ${score}/${questions.length}.<br> Parabéns! Você já é mestre no Hiragana! Continue estudando, e volte sempre que quiser praticar.`;
  }
}

function selectedSquare() {
  
  
  let squareIndex = findIndex(this.id);


  if(checkSquare(squareIndex)){
    
    if(checkMatch(this.id, squareIndex)) {
      
      this.style.border = "5px solid #2ECC71";
      this.style.color = "#2ECC71";

      progress++;
      score++;
      showProgress();
      showLetter();
      


    }else {
      this.style.border = "5px solid #E74C3C";
      this.style.color = "#E74C3C";
  
      setTimeout(() => {
        this.style.border = "none";
      this.style.color = "#000000";
      }, 50);

      progress++;
      showProgress();
      showLetter();
    } 

    if(isGameOver()){
      
        showGameOver();
   
    }
  }


}


function findIndex(id) {
  let index = 0;

  for(let i = 0; i < squares.length; i++){
    if(squares[i].id === id){
      index = i;
      return index;
    }
  }
}

function restartGame(){
  let gameOver = document.querySelector(".gameOver");
  gameOver.style.display = "none";

  progress = 0;
  score = 0;
  lockMode = false;
  squares = [];
  questions = [];
  
  startGame();
}