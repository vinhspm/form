let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convert(choice){
	switch(choice){
		case "r": return "Rock";
		break;
		case "p": return "Paper";
		break;
		case "s": return "Scissors"
		break;
	} 
}

function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = convert(userChoice)  + " beats " + convert(computerChoice) + ". You win!"; 

}
function  lose(userChoice,computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convert(computerChoice)  + " beats " + convert(userChoice) + ". You lose!"; 
}
function draw(userChoice,computerChoice){
	result_p.innerHTML = "It's a draw!!";
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice,computerChoice);
			break;
		case "ss":
		case "rr":
		case "pp":
			draw(userChoice,computerChoice);
			break;
	}
}

function main(){
rock_div.addEventListener('click', function(){
	game("r");
})

paper_div.addEventListener('click', function(){
	game("p");
})

scissors_div.addEventListener('click', function(){
	game("s");
})
}

main();