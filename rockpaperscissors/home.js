let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let computerrock = document.getElementById('computer-rock');
let computerpaper = document.getElementById('computer-paper');
let computerscissors = document.getElementById('computer-scissors');
let computerDiv = document.getElementById('computer-options');
let result = document.getElementById('result');

rock.addEventListener('click', () => {
    result.innerHTML = ''
    computerDiv.style.display = 'block'
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        computerrock.style.display = 'block';
        computerpaper.style.display = 'none';
        computerscissors.style.display = 'none';
        result.innerHTML = "You tied"
    }
    if(randomNumber == 2) {
        computerrock.style.display = 'none';
        computerpaper.style.display = 'block';
        computerscissors.style.display = 'none';
        result.innerHTML = "You lost :("
    }
    if(randomNumber == 3) {
        computerrock.style.display = 'none';
        computerpaper.style.display = 'none';
        computerscissors.style.display = 'block';
        result.innerHTML = "You won!"
    }
})
paper.addEventListener('click', () => {
    result.innerHTML = ''
    computerDiv.style.display = 'block'
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        computerrock.style.display = 'block';
        computerpaper.style.display = 'none';
        computerscissors.style.display = 'none';
        result.innerHTML = "You won!"
    }
    if(randomNumber == 2) {
        computerrock.style.display = 'none';
        computerpaper.style.display = 'block';
        computerscissors.style.display = 'none';
        result.innerHTML = "You tied"
    }
    if(randomNumber == 3) {
        computerrock.style.display = 'none';
        computerpaper.style.display = 'none';
        computerscissors.style.display = 'block';
        result.innerHTML = "You lost :("
    }
})
scissors.addEventListener('click', () => {
    result.innerHTML = ''
    computerDiv.style.display = 'block'
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        computerrock.style.display = 'block';
        computerpaper.style.display = 'none';
        computerscissors.style.display = 'none';
        result.innerHTML = "You lost :("
    }
    if(randomNumber == 2) {
        computerrock.style.display = 'none';
        computerpaper.style.display = 'block';
        computerscissors.style.display = 'none';
        result.innerHTML = "You won!"
    }
    if(randomNumber == 3) {
        computerrock.style.display = 'none';
        computerpaper.style.display = 'none';
        computerscissors.style.display = 'block';
        result.innerHTML = "You tied"
    }
})