const Player1 = document.querySelector(".croix-btn")


const BtnApi = document.querySelector(".yellow-btn")
document.addEventListener("click", () => {
    const croixBtn = document.querySelector(".croix-btn");
    const rondBtn = document.querySelector(".rond-btn");
    const croixImg = croixBtn.querySelector("img");
    const rondImg = rondBtn.querySelector("img");

    croixBtn.addEventListener("click", () => {
        croixBtn.style.backgroundColor = "#F2B137";
        rondBtn.style.backgroundColor = "transparent";
        croixImg.src = "./assets/croix-silver.svg"; 
        rondImg.src = "./assets/oval-plein.svg"; 
        rondImg.style.width = "28px"
    });

    rondBtn.addEventListener("click", () => {
        rondBtn.style.backgroundColor = "#A8BFC9";
        croixBtn.style.backgroundColor = "transparent";
        rondImg.src = "./assets/oval-silver.svg";
        croixImg.src = "./assets/croix-silver.svg"; 
    });
});

