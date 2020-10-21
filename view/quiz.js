let main = document.querySelector("#main")
let QuestionNo = 0
let isChosed =false
const questionListbyNo = {}
let arratOfAnswersElement = []
let arratOfUserAnswers = []

// create Instructions page
let createInsrtPage = (mainDiv, quizTitleTxt, insrtPointTxt, questionList, quizSetting) => {
    let maintxt =document.createElement("div")
    maintxt.classList.add("maintxt")
    mainDiv.appendChild(maintxt)

    let quizTitle =document.createElement("div")
    quizTitle.id ="quiz-title"
    quizTitle.innerText = quizTitleTxt
    maintxt.appendChild(quizTitle)

    let insrtTit =document.createElement("h1")
    insrtTit.classList.add("insrtTit")
    insrtTit.innerText = "Instructions"
    maintxt.appendChild(insrtTit)

    let insrtPoint =document.createElement("div")
    insrtPoint.classList.add("insrtPoint")
    insrtPoint.innerText = insrtPointTxt
            
    maintxt.appendChild(insrtPoint)

    let nextBtn =document.createElement("div")
    nextBtn.id="nextBtn"
    nextBtn.innerText = `Next >`
    nextBtn.style.cursor = "pointer"
    quiz.appendChild(nextBtn)

    nextBtn.addEventListener("click", () => createquiztionPage (questionList, quizSetting, QuestionNo))
    
}

// create Quiztion Page by No. of Quiztion
let createquiztionPage = (questionList, quizSetting, questionNo) =>{
    QuestionNo = questionNo
    console.log ("questionNo "+questionNo)
    console.log(questionNo);
    if(questionNo == 0){
        getQuestionListbyNo(questionList, quizSetting.questionNo)
        console.log(questionListbyNo)
    }

    // clear Instructions page
    clearTheQuestionPage()

    // setup the timer
    let quizTimer =document.createElement("div")
    quizTimer.id = "quizTimer"
    quiz.appendChild(quizTimer)
    let seconds = quizSetting.questionTimeBySecond
    quizTimer.innerText = `00:${seconds}`  
    startquizTimer(quizTimer, seconds)

    // setup question No. Text
    let quizNo =document.createElement("h1")
    quizNo.id = "quiz-No"
    quiz.appendChild(quizNo)
    let quizNoTxt=""
    switch (questionNo+1) {
        case 1:
            quizNoTxt ="1'st"
            break
        case 2:
            quizNoTxt ="2'nd"
            break
        case 3:
            quizNoTxt ="3'rd"
            break;
        default:
            quizNoTxt = questionNo+1 + "'th"
            break;
    }
    quizNoTxt+=" Question"
    // display it  
    quizNo.innerHTML=quizNoTxt

    //setup the question
    let quizTxt =document.createElement("h1")
    quizTxt.id = "quizTxt"
    quiz.appendChild(quizTxt);
    console.log("ASDASD  "+questionNo);
    quizTxt.innerText = questionListbyNo[questionNo].question

    arratOfAnswersElement = []
    // create answer faild and fill it
    for (let i = 0; i < 4; i++) {
        arratOfAnswersElement.push(document.createElement("div"))
        answer = arratOfAnswersElement[i]
        answer.id = `answers${i+1}`
        quiz.appendChild(answer);
        answer.innerText = questionListbyNo[questionNo].answers[i]
        answer.addEventListener("click", (e) => {
            if(!isChosed){
                isChosed=true
                let cho =e.currentTarget.id.substring(7,8)
                doWhenQuestionDone(cho)
            }
        })
    }
    let nextBtn2 =document.createElement("div")
    nextBtn2.id = "nextBtn2"

    nextBtn2.innerText = (questionNo != quizSetting.questionNo-1)?"Next >":"Finish"
    nextBtn2.classList.add("displayNall")
    quiz.appendChild(nextBtn2);
    // isChosed
    nextBtn2.addEventListener("click", () => {
        if(questionNo != quizSetting.questionNo-1){
            createquiztionPage(questionList, quizSetting, questionNo+1)
        }else{
            console.log(arratOfUserAnswers);
            console.log("Score page");
        }
            
        
    })
    
    console.log("createquiztionPage");
} 

// get list of question by the No. that needed
let getQuestionListbyNo = (questionList, questionNo) =>{
    
    let questionListLength = Object.values(questionList).length
    let arrayOfNoChosenQuestion = []

    for (let i = 0; i < questionNo; i++) {
        let x = Math.floor(Math.random() * questionListLength);
        console.log(x);
        if(arrayOfNoChosenQuestion.indexOf(x) == -1){
            arrayOfNoChosenQuestion.push(x)
            questionListbyNo[i]=questionList[x]
        }else{
            i=i-1
        }
    }
}

// start and display the timer
let startquizTimer = (quizTimer ,questionTimeBySecond) => {

    let seconds = questionTimeBySecond 

    var x = setInterval(function() { 
        seconds = seconds-1
        quizTimer.innerText = (seconds < 10)? `00:0${seconds}` : `00:${seconds}`  
        if (seconds < 0 || isChosed) { 
            seconds=0
            clearInterval(x) 
            quizTimer.innerText = '00:00' 
            isChosed || doWhenQuestionDone()
        }
    }, 1000) 
}

// Store the Answer
let doWhenQuestionDone = (numberOfChosenAnswers) => {
    const theAnswer =  {
        theAnswerNo: NaN,
        isRigth: false
    }
    if(numberOfChosenAnswers){
        if(numberOfChosenAnswers == questionListbyNo[QuestionNo].rightAnswerNo){
            theAnswer.isRigth=true
        }
        theAnswer.theAnswerNo = numberOfChosenAnswers
    }
    displayTheRightAnswer()

    arratOfUserAnswers.push(theAnswer) 
}

// displayTheRightAnswer
let displayTheRightAnswer = () =>{
    let temp = []
    for (let i = 0; i < 4; i++) {
        temp.push(document.createElement("img"))
        img = temp[i]
        img.classList.add( `img${i+1}`)
        document.querySelector("#quiz").appendChild(img);
        if(i+1 == questionListbyNo[QuestionNo].rightAnswerNo){
            img.src="./resources/quiz/right.svg"
            arratOfAnswersElement[i].classList.add("right")
            arratOfAnswersElement[i].classList.add("cursorDefault")
            continue;
        }
        img.src="./resources/quiz/wrong.svg"
        arratOfAnswersElement[i].classList.add("false")
        arratOfAnswersElement[i].classList.add("_670F7D")
        arratOfAnswersElement[i].classList.add("cursorDefault")
    }

    nextBtn2.classList.remove("displayNall")
}

// clear The Question Page
let clearTheQuestionPage = () => {{
    quiz.innerHTML=""
    isChosed =false
}}

// START the quiz page
let startQuizPage = (insrtTitTxt, insrtPointTxt, questionList, quizSetting) => {
    main.innerHTML=""

    // create the main div call quiz
    let quiz =document.createElement("div")
    quiz.id="quiz"
    main.appendChild(quiz)

    // create Instructions page
    createInsrtPage(quiz, insrtTitTxt, insrtPointTxt, questionList, quizSetting)
}