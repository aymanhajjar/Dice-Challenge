window.onload = () => {
    var number_first = Math.floor(Math.random() * 6) + 1;
    var number_second = Math.floor(Math.random() * 6) + 1;
    var dice1 = document.getElementById('die1')
    var dice2 = document.getElementById('die2')
    var result = document.getElementById('result')
    
    if(number_first == 1) {
        dice1.src= 'images/dice1.png'
    } else if (number_first == 2) {
        dice1.src= 'images/dice2.png'
    } else if (number_first == 2) {
        dice1.src= 'images/dice1.png'
    } else if (number_first == 3) {
        dice1.src= 'images/dice3.png'
    } else if (number_first == 4) {
        dice1.src= 'images/dice4.png'
    } else if (number_first == 5) {
        dice1.src= 'images/dice5.png'
    } else if (number_first == 6) {
        dice1.src= 'images/dice6.png'
    }
    
    if(number_second == 1) {
        dice2.src= 'images/dice1.png'
    } else if (number_second == 2) {
        dice2.src= 'images/dice2.png'
    } else if (number_second == 2) {
        dice2.src= 'images/dice1.png'
    } else if (number_second == 3) {
        dice2.src= 'images/dice3.png'
    } else if (number_second == 4) {
        dice2.src= 'images/dice4.png'
    } else if (number_second == 5) {
        dice2.src= 'images/dice5.png'
    } else if (number_second == 6) {
        dice2.src= 'images/dice6.png'
    }

    if(number_first > number_second) {
        result.innerText = 'Player 1 Wins!'
    } else if (number_second > number_first) {
        result.innerText = "Player 2 Wins!"
    } else {
        result.innerText = "Draw!"
    }

}