const body = document.body;
let stockBtnCondition = "";
const croixBtn = document.querySelector(".croix-btn");
const rondBtn = document.querySelector(".rond-btn");
const croixImg = document.getElementById("croixChangeContent");
const rondImg = document.getElementById("ovalContent");

const croixTrans = "./assets/croix-trans.svg";
const croix = "./assets/croix-silver.svg";
const rond = "./assets/oval-silver.svg";
const rondPlein = "./assets/oval-silver copy.svg";
const BtnApi = document.querySelector(".yellow-btn");
const BtnUser = document.querySelector(".blue-btn");
const startPop = document.querySelector(".startgame");

const GridCountCase = document.querySelector(".grid-case");
const tabGrid = ["", "", "", "", "", "", "", "", ""];
const player1 = "";
const player2 = "";
const fourBand = document.querySelector(".four-banderole");
const ifhez = [0, 1];
const fiveBand = document.querySelector(".five-banderolex");

croixBtn.addEventListener("click", () => {
	croixBtn.style.backgroundColor = "#A8BFC9";
	rondBtn.style.backgroundColor = "transparent";
	croixImg.src = croixTrans;
	rondImg.src = rondPlein;
	stockBtnCondition = croix;
	console.log(stockBtnCondition);
});

rondBtn.addEventListener("click", () => {
	rondBtn.style.backgroundColor = "#A8BFC9";
	croixBtn.style.backgroundColor = "transparent";
	rondImg.src = rond;
	croixImg.src = croix;
	stockBtnCondition = rond;
	console.log(stockBtnCondition);
});

BtnApi.addEventListener("click", () => {
	startPop.remove();
	if (stockBtnCondition == rond) {
		player2 == stockBtnCondition;
		console.log(player2);
	} else if (stockBtnCondition == croix) {
		player1 == stockBtnCondition;
		console.log(player1);
	}
});

BtnUser.addEventListener("click", () => {
	startPop.remove();
});

const winningCondition = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];
function imgTurnChange() {
	const imgTurn = document.getElementById("img-turn");
	let stockimg = "";
	if (playerTurnX === true) {
		imgTurn.src = imgCroix;
		stockimg = imgTurn;
		imgTurn.appendChild(stockimg);
	}
}

function winPopUpDisplay() {
	if (player1 == winningCondition) {
		fourBand.style.display = "block";
	} else if (player2 == winningCondition) {
		fiveBand.style.display = "block";
	}
}
