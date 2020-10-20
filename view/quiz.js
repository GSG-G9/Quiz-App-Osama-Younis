let main = document.querySelector("#main")

// START the quiz page
let startQuizPage = (insrtTitTxt, insrtPointTxt) => {
    main.innerHTML=""

    // create the main div call quiz
    let quiz =document.createElement("div")
    quiz.id="quiz"
    main.appendChild(quiz);

    // create Instructions page
    createInsrtPage(quiz, insrtTitTxt, insrtPointTxt)
}

// create Instructions page
let createInsrtPage = (mainDiv, quizTitleTxt, insrtPointTxt) => {
    let maintxt =document.createElement("div")
    maintxt.classList.add("maintxt")
    mainDiv.appendChild(maintxt);

    let quizTitle =document.createElement("div")
    quizTitle.id ="quiz-title"
    quizTitle.innerText = quizTitleTxt
    maintxt.appendChild(quizTitle);

    let insrtTit =document.createElement("h1")
    insrtTit.classList.add("insrtTit")
    insrtTit.innerText = "Instructions"
    maintxt.appendChild(insrtTit);

    let insrtPoint =document.createElement("div")
    insrtPoint.classList.add("insrtPoint")
    insrtPoint.innerText = insrtPointTxt
            
    maintxt.appendChild(insrtPoint);

    let nextBtn =document.createElement("div")
    nextBtn.id="nextBtn"
    nextBtn.innerText = `Next >`
    nextBtn.style.cursor = "pointer"
    quiz.appendChild(nextBtn);

    nextBtn.addEventListener("click", createQuestionPage)
    
}

let createQuestionPage = () =>{
    quiz.innerHTML=""
    console.log("createQuestionPage");
} 