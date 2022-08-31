//group all elements into an object
const p1 = {
    score: 0,
    btn: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0,
    btn: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Score')
}
// const p1Btn = document.querySelector('#p1Btn');
// const p2Btn = document.querySelector('#p2Btn');
// const p1ScoreSpan = document.querySelector('#p1Score');
// const p2ScoreSpan = document.querySelector('#p2Score');
// let p1Score = 0;
// let p2Score = 0;
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);  //value refers a string
    reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');  //or add Bulma or Bootstrap class
        p.btn.disabled = false;
    }
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.btn.addEventListener('click', function () {
    updateScores(p1, p2);
})
p2.btn.addEventListener('click', function () {
    updateScores(p2, p1);
})

// p1Btn.addEventListener('click', function () {
//     if (!isGameOver) {
//         p1Score++;
//         if (p1Score === winningScore) {
//             isGameOver = true;
//             // p1ScoreSpan.classList.add('winner');
//             // p2ScoreSpan.classList.add('loser');
//             p1ScoreSpan.classList.add('has-text-success');
//             p2ScoreSpan.classList.add('has-text-danger');
//             //disables button from Bulma
//             p1Btn.disabled = true;
//             p2Btn.disabled = true;
//         }
//         p1ScoreSpan.textContent = p1Score;
//     }
// })

// p2Btn.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score++;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             // p2ScoreSpan.classList.add('winner');
//             // p1ScoreSpan.classList.add('loser');
//             p2ScoreSpan.classList.add('has-text-success');
//             p1ScoreSpan.classList.add('has-text-danger');
//             p1Btn.disabled = true;
//             p2Btn.disabled = true;
//         }
//         p2ScoreSpan.textContent = p2Score;
//     }
// })

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1ScoreSpan.textContent = p1Score;
//     p2ScoreSpan.textContent = p2Score;

//     // p1ScoreSpan.classList.remove('winner', 'loser');   //we can add self-defined style class
//     // p2ScoreSpan.classList.remove('winner', 'loser');
//     p1ScoreSpan.classList.remove('has-text-success', 'has-text-danger');  //or add Bulma or Bootstrap class
//     p2ScoreSpan.classList.remove('has-text-success', 'has-text-danger');

//     //non-disables button from Bulma
//     p1Btn.disabled = false;
//     p2Btn.disabled = false;

// }

