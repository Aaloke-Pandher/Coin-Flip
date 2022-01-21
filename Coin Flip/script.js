// Coin Flip 

// Variables 
let coinImg = document.getElementById("coin"); 
let tailscount = 0; 
let headscount = 0; 
let tails = document.getElementById("tails-num"); 
let heads = document.getElementById("head-num"); 

// Event Listeners 
document.getElementById("flip-btn").addEventListener("click", flipCoin);  

// Probability Distribution 
function flipCoin() {
    let randNum = Math.random(); 

    if (randNum < 0.5) {
        tailscount++; 
        coinImg.src = "Img/Tails.png"; 
        tails.innerHTML = tailscount; 
    }else { 
        headscount++; 
        coinImg.src = "Img/Coin.png"; 
        heads.innerHTML = headscount; 
    }
} 
