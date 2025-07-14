// home page
// -Display button to start playing

//page 1
// -Creating buttons for THE PLAYER to choose the size of the boerd 

//page 2
// -Initialize a list of possible numbers based on the bored size
// -Creating a letter shaped buttons to cancel out the letters of the word 'BINGO'
//Starting the game
// - Player select a number from the list or numbers being randomly selected from the list without repeating
// -Display the drown number on the screen
// -player should check if the number exists on the board (if yes then the number should be marked)
// -Checking if the player got any row, column or diagonal to cancle one of the letters
// -Check if any player has won 
// -If a player wins display 'player wins'
// -optiions to 'play again' or 'restart the game' 

const homePage = document.querySelector('.Homepage')
const page1 = document.querySelector('.page1')
const playBtn = document.querySelector('.Play')
const solo = document.querySelector('.solo')
const compete = document.querySelector('.compete')
const playBoard1 = document.querySelector('.playboard1')
const playBoard2 = document.querySelector('.playboard2')
const reset = document.querySelector('.reset')
const squares = document.querySelectorAll('.board1 .sqr')
// const Board2 = document.querySelector('.board2')


playBtn.addEventListener('click', () => {
    homePage.style.display = 'none'
    page1.style.display = 'block'
    
})

solo.addEventListener('click', () => {
    page1.style.display = 'none'
    playBoard1.style.display = 'block'
    
})

compete.addEventListener('click', () => {
    page1.style.display = 'none'
    playBoard2.style.display = 'flex'
    
})

playBoard2.addEventListener('click', () => {
    playBoard2.style.display = 'none'
    homePage.style.display = 'block'
    
})

playBoard1.addEventListener('click', () => {
    playBoard1.style.display = 'none'
    homePage.style.display = 'block'
    
})

const number = []
const randomIntBoard = (board1) => {
number.length = 0

    for (i = 1; i<=25; i++) {
        number.push(i)

    }
}

const arrayBoard = (array) => {
    for (i = array.length - 1; i > 0; i--) {
        num = Math.floor(Math.random() * (i + 1))
    }
arrayBoard(number)

squares.forEach((square, index) => {
    square.textContent = number[index]
})
}



