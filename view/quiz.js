let main = document.querySelector("#main")
let questionNo = 1
const questionListbyNo = {}

// create Instructions page
let createInsrtPage = (mainDiv, quizTitleTxt, insrtPointTxt, answersList, quizSetting) => {
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

    nextBtn.addEventListener("click", () => createquiztionPage (answersList, quizSetting, questionNo))
    
}

// create Quiztion Page by No. of Quiztion
let createquiztionPage = (answersList, quizSetting, questionNo) =>{
    questionNo = questionNo
    if(questionNo == 1){
        getQuestionListbyNo(answersList, quizSetting.questionNo)
        console.log(questionListbyNo);
    }

    // clear Instructions page
    quiz.innerHTML=""

    // setup the timer
    let quizTimer =document.createElement("div")
    quizTimer.id = "quizTimer"
    quiz.appendChild(quizTimer);
    let seconds = quizSetting.questionTimeBySecond
    quizTimer.innerText = `00:${seconds}`;  
    startquizTimer(quizTimer, seconds)

    // setup question No. Text
    let quizNo =document.createElement("h1")
    quizNo.id = "quiz-No"
    quiz.appendChild(quizNo);
    let quizNoTxt=""
    switch (questionNo) {
        case 1:
            quizNoTxt ="1'st"
            break;
        case 2:
            quizNoTxt ="2'nd"
            break;
        case 3:
            quizNoTxt ="3'rd"
            break;
        default:
            quizNoTxt = questionNo + "'th"
            break;
    }
    quizNoTxt+=" Question"
    // display it  
    quizNo.innerHTML=quizNoTxt

    //setup the question
    let quizTxt =document.createElement("h1")
    quizTxt.id = "quizTxt"
    quiz.appendChild(quizTxt);
    quizTxt.innerText = questionListbyNo[questionNo].question

    // create answer faild and fill it
    let temp = []
    for (let i = 0; i < 4; i++) {
        temp.push(document.createElement("div"))
        answer = temp[i]
        answer.id = `answers${i+1}`
        quiz.appendChild(answer);
        answer.innerText = questionListbyNo[questionNo].answers[i]
    }

    console.log("createquiztionPage");
} 

// get list of question by the No. that needed
let getQuestionListbyNo = (answersList, questionNo) =>{
    
    let answersListLength = Object.values(answersList).length
    let arrayOfNoChosenQuestion = []

    for (let i = 0; i < questionNo; i++) {
        let x = Math.floor(Math.random() * answersListLength);
        if(arrayOfNoChosenQuestion.indexOf(x) == -1){
            arrayOfNoChosenQuestion.push(x)
            questionListbyNo[i]=answersList[x]
        }else{
            i=i-1
        }
    }
}

let startquizTimer = (quizTimer ,questionTimeBySecond) => {

    let seconds = questionTimeBySecond 

    var x = setInterval(function() { 
        seconds = seconds-1
        quizTimer.innerText = (seconds < 10)? `00:0${seconds}` : `00:${seconds}`;  
        if (seconds < 0) { 
            clearInterval(x); 
            quizTimer.innerText = '00:00'; 
            doWhenQuestionDone()
        }
    }, 1000); 
}


doWhenQuestionDone = () => {

}


// START the quiz page
let startQuizPage = (insrtTitTxt, insrtPointTxt, answersList, quizSetting) => {
    main.innerHTML=""

    // create the main div call quiz
    let quiz =document.createElement("div")
    quiz.id="quiz"
    main.appendChild(quiz);

    // create Instructions page
    createInsrtPage(quiz, insrtTitTxt, insrtPointTxt, answersList, quizSetting)
}