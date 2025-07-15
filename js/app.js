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
const playAgain2 = document.querySelector('.playAgain2')
const playAgain1 = document.querySelector('.playAgain1')
const numbersBtn = document.querySelectorAll('.numbersBtn')
const theNumberIs = document.querySelectorAll('.theNumberIs')
const squareMarks = document.querySelectorAll('.sqr')
const letters = document.querySelectorAll('.letters')


allowNumberPress = null
const usedNumbers = []
const number = []



playBtn.addEventListener('click', () => {
    homePage.style.display = 'none'
    page1.style.display = 'block'
    
})

solo.addEventListener('click', () => {
    page1.style.display = 'none'
    playBoard1.style.display = 'block'
    
    arrayBoard(number)
    fillSquares('board1')
    markTheSquares()

    
})

compete.addEventListener('click', () => {
    page1.style.display = 'none'
    playBoard2.style.display = 'flex'
    
    arrayBoard(number)
    fillSquares('board2')
    
    arrayBoard(number)
    fillSquares('board3')
    markTheSquares()
})

playAgain2.addEventListener('click', () => {
    playBoard2.style.display = 'none'
    homePage.style.display = 'block'

    usedNumbers.length = 0
    allowNumberPress = null

    squareMarks.forEach(squareMark => {
        squareMark.classList.remove('marked')
    })

    theNumberIs.forEach(element => {
        element.textContent = 'The number Is:'
    })
    
})

playAgain1.addEventListener('click', () => {
    playBoard1.style.display = 'none'
    homePage.style.display = 'block'
    
     usedNumbers.length = 0
    allowNumberPress = null

    squareMarks.forEach(squareMark => {
        squareMark.classList.remove('marked')
    })
    theNumberIs.forEach(element => {
        element.textContent = 'The number Is:'
    })
    

})



const arrayBoard = (array) => {
    number.length = 0

    while (array.length < 25) {
        const num = Math.floor(Math.random() * 25) + 1
        // console.log(num)
            if (!array.includes(num)) {
            // array[i] = num    
            array.push(num) 
            }
    }
    console.log(array)
}
function fillSquares(className) {
    const squares = document.querySelectorAll(`.${className} .sqr`)
    squares.forEach((square, index) => {
        square.textContent = number[index]
        // console.log(square)
    })   
}

numbersBtn.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        const popNumbers = Math.floor(Math.random() * 25) + 1
        tries = 0
        while (usedNumbers.includes(popNumbers)) {
             popNumbers = Math.floor(Math.random() * 25) + 1
             tries++
        }
        allowNumberPress = popNumbers
        usedNumbers.push(popNumbers)
        theNumberIs[index].textContent = `The Number Is: ${popNumbers}`
    })
})
    
markTheSquares = () => {
    squareMarks.forEach(squareMark => {
        squareMark.addEventListener('click', () => {
            squareNumber = parseInt(squareMark.textContent)
            if (squareNumber === allowNumberPress){
                if(!squareMark.classList.contains('marked')){
                    squareMark.classList.add('marked')
                }
            }
        })

    })
}

function checkForBingo() {
    size = 5
    const  squares = Array.from(document.querySelectorAll('.board1 .sqr'))

    grid = []
    for (i = 0; i < size; i++){
        grid.push(squares.slice(i * size, (i + 1) * size))
    }
    count = 0
//rows
    for (i = 0; i < size; i++){
        if (grid[i].every(cell => cell.classlist.contains('marked'))){
            count++
        }
    }
//colum
    for (j =0; j < size; j++){
        let columnMarked = true
        for (i = 0; i < size; i++) {
            if(!grid[i][j].classlist.contains('marked')) {
                columnMarked = false
                break
            }
        }
        if (columnMarked) {
            count++
        }
    }

//diagonal
    diagonal = true
    for (i = 0; i < size; i++) {
        if (!grid[i][size - i - 1].classlist.contains('marked')) {
            diagonal =  false
            break
        }
    }
    if (diagonal) {
        count++
    }

//diagonal2
    diagonal2 = true
    for (i = 0; i < size; i++) {
        if (!grid[i][size - i - 1].classlist.contains('marked')) {
            diagonal2 =  false
            break
        }
    }
    if (diagonal2) {
        count++
    }
    bingoDisply(count)

}

const bingoDisply = (count) => {
    letters.forEach((letter, index) => {
        if (index < count) {
            letter.classList.add('crossed')
        }
        else {
            letter.classList.remove('crossed')
        }
    })
}

