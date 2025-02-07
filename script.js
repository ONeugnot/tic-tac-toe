 let body = document.body;
 const opacity = document.querySelector(".opacity")
 const player2 = document.querySelector(".five-banderole")
 const player1 = document.querySelector(".four-banderole")
 const nullPlayer = document.querySelector(".six-banderole")
 const silverreturn = document.getElementById("silver-btn")
 const silverreturn1 = document.getElementById("silver-btn1")
 const silverreturn2 = document.getElementById("silver-btn2")
 const orangecontinue = document.getElementById("orange-btn")
 const orangecontinue1 = document.getElementById("orange-btn1")
 const orangecontinue2 = document.getElementById("orange-btn2")
// let savechoose = ""

const btnDisable = document.querySelector(".yellow-btn");
const btnDisable1 = document.querySelector(".blue-btn");
const start = document.querySelector(".start-choose");
const btnCroix = document.querySelector(".croix-btn");
const btnRond = document.querySelector(".rond-btn");
const imgcroix = document.querySelector(".imgjsp");
const imgRond = document.querySelector(".imgjsp2");
const restart = document.querySelector(".restart")
btnDisable.addEventListener("click", () => {
	start.remove();
});
btnDisable1.addEventListener("click", () => {
	start.remove();
});


btnCroix.addEventListener("click", () => {
	btnCroix.style.background = "#a8bfc9";
	btnRond.style.background = "transparent";
	imgcroix.src = "./assets/croix-silver-copy.svg";
	imgRond.src = "./assets/oval-silver-copy.svg";
	savechoose = "./assets/croix-color-blue.svg";
	console.log(savechoose);
});

btnRond.addEventListener("click", () => {
	btnRond.style.background = "#a8bfc9";
	btnCroix.style.background = "transparent";
	imgcroix.src = "./assets/croix-silver.svg";
	imgRond.src = "./assets/ronddeux.svg";
	savechoose = "./assets/oval-orange.svg";
	console.log(savechoose);
});



let PlayerTurn = 0;
const grid = document.querySelectorAll(".grid-case")
let tablGame = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const spanX = document.querySelector("spanX")

function checkWinner(player) {
	for (let combination of winningCombinations) {
		if (tablGame[combination[0]] === player && 
			tablGame[combination[1]] === player && 
			tablGame[combination[2]] === player) {
			return true; 
		}
	}
	return false;
}


for (let i = 0; i < grid.length; i++) {
	const gridObject = grid[i];
	
    gridObject.addEventListener("click", () => {
		const img = gridObject.firstElementChild;

		if (img.alt) return;
		
		if (PlayerTurn % 2 == 0) {
			if (img.src && img.alt == "") {
				img.src = "./assets/croix-color-blue.svg"
				img.alt = "X"
			}
		}else {
			if (img.src && img.alt == "") {
				img.src = "./assets/oval-orange.svg"
				img.alt = "O"
		}
	}
		tablGame[i] = img.alt;

		if (checkWinner(img.alt)) {
			if (img.alt == "O") {
				opacity.style.display = "block"
				player1.style.display = "flex"
				
			}else{
				opacity.style.display = "block"
				player2.style.display = "flex"
				
			}
		}
		if (!tablGame.includes("")) {
			nullPlayer.style.display =  "flex"
		}
	PlayerTurn++;
	console.log(tablGame);
    });
}
orangecontinue.addEventListener("click", () => {
    PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";3
    }
    player1.style.display = "none";
    player2.style.display = "none";
    nullPlayer.style.display = "none";
		opacity.style.display  = "none"
    tablGame = ["", "", "", "", "", "", "", "", ""];
});
orangecontinue1.addEventListener("click", () => {
    PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";3
    }
    player1.style.display = "none";
    player2.style.display = "none";
		opacity.style.display  = "none"
    nullPlayer.style.display = "none";
    tablGame = ["", "", "", "", "", "", "", "", ""];
});
orangecontinue2.addEventListener("click", () => {
    PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";3
    }
    player1.style.display = "none";
    player2.style.display = "none";
    nullPlayer.style.display = "none";
	opacity.style.display  = "none"
    tablGame = ["", "", "", "", "", "", "", "", ""];
});

// BTN QUIT 


silverreturn.addEventListener("click", () => {
    PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";3
    }
    player1.style.display = "none";
    player2.style.display = "none";
    nullPlayer.style.display = "none";
	body.appendChild(start)
	opacity.style.display  = "none"
    tablGame = ["", "", "", "", "", "", "", "", ""];
});
silverreturn1.addEventListener("click", () => {
    PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";3
    }
    player1.style.display = "none";
    player2.style.display = "none";
    nullPlayer.style.display = "none";
	body.appendChild(start)
	opacity.style.display  = "none"
    tablGame = ["", "", "", "", "", "", "", "", ""];
});
silverreturn2.addEventListener("click", () => {
    PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";3
    }
    player1.style.display = "none";
    player2.style.display = "none";
    nullPlayer.style.display = "none";
	body.appendChild(start)
	opacity.style.display  = "none"
    tablGame = ["", "", "", "", "", "", "", "", ""];
});

restart.addEventListener("click", () => {
	PlayerTurn = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].firstElementChild.src = "";
        grid[i].firstElementChild.alt = "";
		tablGame = ["", "", "", "", "", "", "", "", ""];
    }
})