//get the elements that needed
let homeLeft = document.querySelector(".home-left")
let homeRight = document.querySelector(".home-right")
let homeLeftImg = document.querySelector(".home-left-img")
let homeRightImg = document.querySelector(".home-right-img")
let homeLeftTxt = document.querySelector(".home-left-text")
let homeRightTxt = document.querySelector(".home-right-text")

// set the hover on both left and right sides
let mouseOverHomeLeft = (e)=>{
    homeLeft.classList.add("home-left-hover")
    homeLeftImg.classList.add("home-left-img-hover")
    homeLeftTxt.classList.add("home-left-text-hover")
    homeRight.classList.remove("home-right-hover")
    homeRightImg.classList.remove("home-right-img-hover")
    homeRightTxt.classList.remove("home-right-text-hover")
}

let mouseOverHomeRight = (e)=>{
    homeRight.classList.add("home-right-hover")
    homeRightImg.classList.add("home-right-img-hover")
    homeRightTxt.classList.add("home-right-text-hover")
    homeLeft.classList.remove("home-left-hover")
    homeLeftImg.classList.remove("home-left-img-hover")
    homeLeftTxt.classList.remove("home-left-text-hover")
}

homeLeft.addEventListener("mouseover", mouseOverHomeLeft);
homeRight.addEventListener("mouseover", mouseOverHomeRight);

homeLeftImg.addEventListener("mouseover", mouseOverHomeLeft);
homeRightImg.addEventListener("mouseover", mouseOverHomeRight);

homeLeftTxt.addEventListener("mouseover", mouseOverHomeLeft);
homeRightTxt.addEventListener("mouseover", mouseOverHomeRight);


