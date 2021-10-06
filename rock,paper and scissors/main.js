
const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const botHand = document.querySelector('.bot-hand');
    const botOptions = ['rock','paper','scissors'];
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });

    options.forEach(option => {
        option.addEventListener('click',function(){
            const botNumber = Math.floor(Math.random()*3);
            const botChoice = botOptions[botNumber];

            setTimeout(() => {
                compareHands(this.textContent,botChoice);
    
                playerHand.src =`./imgs/${this.textContent}.png`;
                botHand.src = `./imgs/${botChoice}.png`
            },2000)


            playerHand.style.animation = `shakePlayer 2s ease`;
            botHand.style.animation = `shakeBot 2s ease`;
        })
    })
    
    const compareHands = (playerChoice, botChoice) => {
        const winner = document.querySelector('.winner');
        
        if (playerChoice === botChoice) {
            winner.textContent = 'You tie';
            return;
        }

        if (playerChoice === 'rock') {
            if (botChoice === 'scissors') {
                winner.textContent = 'You Win';
                return
            } else {
                winner.textContent = 'You Lose';
                return
            }
        }

        if ( playerChoice === 'paper') {
            if (botChoice ==='rock'){
                winner.textContent = 'You Win';
                return
            } else {
                winner.textContent = 'You Lose';
                return
            }
        }

        if (playerChoice === 'scissors'){
            if(botChoice ==='paper'){
                winner.textContent = 'You Win';
                return
            } else {
                winner.textContent = 'You Lose';
                return
            }
        }
        }
    }
playMatch();
