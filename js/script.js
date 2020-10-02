function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else if(argMoveId == 3){
		return 'nożyce';
	}

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

// komputer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* ruch komputera 
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
	computerMove = 'papier';
} else if (randomNumber == 3){
	computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);

// gracz

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
	playerMove = 'papier';
} else if (playerInput == '3'){
	playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

console.log('displayResult'); 


function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', Twój ruch to ' + argPlayerMove);
	if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		printMessage('Remis!'); 
	} else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrałeś!');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Przegrałeś!');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
		printMessage('Remis!');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrałeś!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		printMessage('Remis!');
	} else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
		printMessage('Błędna wartość. Wpisz numer 1, 2 lub 3');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
	  printMessage('Błędna wartość. Wpisz numer 1, 2 lub 3');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
		printMessage('Błędna wartość. Wpisz numer 1, 2 lub 3');
	} 
}

displayResult(computerMove, playerMove);




/* wynik gry
if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  } else if(computerMove == 'kamień' && playerMove == 'kamień'){
	  printMessage('Remis!'); 
  } else if(computerMove == 'kamień' && playerMove == 'nożyce'){
	  printMessage('Przegrałeś!');
  } else if(computerMove == 'papier' && playerMove == 'kamień'){
	  printMessage('Przegrałeś!');
  } else if(computerMove == 'papier' && playerMove == 'papier'){
	  printMessage('Remis!');
  } else if(computerMove == 'papier' && playerMove == 'nożyce'){
	  printMessage('Ty wygrywasz!');
  } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
	  printMessage('Ty wygrywasz!');
  } else if(computerMove == 'nożyce' && playerMove == 'papier'){
	  printMessage('Przegrałeś!');
  } else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
	  printMessage('Remis!');
  } else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
	  printMessage('Błędna wartość. Wpisz numer 1, 2 lub 3');
  } else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
	printMessage('Błędna wartość. Wpisz numer 1, 2 lub 3');
  } else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
		printMessage('Błędna wartość. Wpisz numer 1, 2 lub 3');
  }
*/
