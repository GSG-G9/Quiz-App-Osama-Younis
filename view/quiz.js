let main = document.querySelector("#main")
let QuestionNo = 0
let isChosed =false
let arratOfAnswersElement = []
let user = {
    name:"",
    questionListbyNo:[],
    arratOfUserAnswers:[],
    Score: 0
}

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

    nextBtn.addEventListener("click", () => createInputPage (quizTitleTxt,questionList, quizSetting, QuestionNo))
}

// create  page for get the user name
let createInputPage = (quizTitleTxt,questionList, quizSetting, QuestionNo) =>{
    quiz.innerHTML=""

    let quizTitle2 = document.createElement("div")
    quizTitle2.id ="quiz-title2"
    quizTitle2.innerText = quizTitleTxt
    quiz.appendChild(quizTitle2)

    let nameinput = document.createElement("input")
    nameinput.id ="nameinput"
    nameinput.placeholder = "Enter your name"
    quiz.appendChild(nameinput)
    nameinput.autocapitalize="off" 
    nameinput.autocomplete="off" 

    let nextBtn = document.createElement("div")
    nextBtn.id ="nextBtn"
    nextBtn.innerText = `Start`
    nextBtn.style.cursor="pointer"
    quiz.appendChild(nextBtn)

    nextBtn.addEventListener("click", () => {
        if(nameinput.value){
            user.name = nameinput.value.trim()
            createquiztionPage (questionList, quizSetting, QuestionNo)
        }else{
            console.error("plz, enter your name");
        }
    })


    
}

// create Quiztion Page by No. of Quiztion
let createquiztionPage = (questionList, quizSetting, questionNo) =>{
    QuestionNo = questionNo
    console.log ("questionNo "+questionNo)
    console.log(questionNo);
    if(questionNo == 0){
        getQuestionListbyNo(questionList, quizSetting.questionNo)
        console.log(user.questionListbyNo)
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
            break
        default:
            quizNoTxt = questionNo+1 + "'th"
            break
    }
    quizNoTxt+=" Question"
    // display it  
    quizNo.innerHTML=quizNoTxt

    //setup the question
    let quizTxt =document.createElement("h1")
    quizTxt.id = "quizTxt"
    quiz.appendChild(quizTxt)
    console.log("ASDASD  "+questionNo)
    quizTxt.innerText = user.questionListbyNo[questionNo].question

    arratOfAnswersElement = []
    // create answer faild and fill it
    for (let i = 0; i < 4; i++) {
        arratOfAnswersElement.push(document.createElement("div"))
        answer = arratOfAnswersElement[i]
        answer.id = `answers${i+1}`
        quiz.appendChild(answer);
        answer.innerText = user.questionListbyNo[questionNo].answers[i]
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
            createScorePage()
        }
    })
} 

// get list of question by the No. that needed
let getQuestionListbyNo = (questionList, questionNo) =>{
    
    let questionListLength = Object.values(questionList).length
    let arrayOfNoChosenQuestion = []

    for (let i = 0; i < questionNo; i++) {
        let x = Math.floor(Math.random() * questionListLength)
        if(arrayOfNoChosenQuestion.indexOf(x) == -1){
            arrayOfNoChosenQuestion.push(x)
            user.questionListbyNo[i]=questionList[x]
        }else{
            i=i-1
        }
    }
}

// start and display the timer
let startquizTimer = (quizTimer ,questionTimeBySecond) => {

    let seconds = questionTimeBySecond 

    let x = setInterval(function() { 
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
        if(numberOfChosenAnswers == user.questionListbyNo[QuestionNo].rightAnswerNo){
            theAnswer.isRigth=true
        }
        theAnswer.theAnswerNo = numberOfChosenAnswers
    }
    displayTheRightAnswer()

    user.arratOfUserAnswers.push(theAnswer) 
}

// displayTheRightAnswer
let displayTheRightAnswer = () =>{
    let temp = []
    for (let i = 0; i < 4; i++) {
        temp.push(document.createElement("img"))
        img = temp[i]
        img.classList.add( `img${i+1}`)
        document.querySelector("#quiz").appendChild(img)
        if(i+1 == user.questionListbyNo[QuestionNo].rightAnswerNo){
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

// calculate the usser score
let getUserScore = () => {
    var result = {};
    user.arratOfUserAnswers.forEach(function(x) {
        result[x.isRigth] = (result[x.isRigth] || 0) + 1;
    });
    user.Score = ((result[true]/user.arratOfUserAnswers.length)*100).toLocaleString( undefined,{ minimumFractionDigits: 1 } )
}

// clear The Question Page
let clearTheQuestionPage = () => {
    quiz.innerHTML=""
    isChosed =false
}

//create score page 
let createScorePage = () => {

    // clear the Page
    quiz.innerHTML=""

    //get the uer score
    getUserScore()

    //Create the Elements
    let yourScore = document.createElement("h1")
    yourScore.id = "yourScore"
    yourScore.innerText = "Your Score :"
    quiz.appendChild(yourScore)

    let yourScoreRe = document.createElement("h1")
    yourScoreRe.id = "yourScoreRe"
    yourScoreRe.innerText = `${user.Score}%`
    quiz.appendChild(yourScoreRe)


    let gotLDpage = document.createElement("div")
    gotLDpage.id= "gotLDpage"
    gotLDpage.innerText = "Leaderboard"
    quiz.appendChild(gotLDpage)
    // go to Leaderboard page
    gotLDpage.addEventListener("click", () => startLeaderboardPage)
    
    let goHomeBtn = document.createElement("div")
    goHomeBtn.id= "goHomeBtn"
    goHomeBtn.innerText = "Home"
    quiz.appendChild(goHomeBtn)
    //got to home page
    goHomeBtn.addEventListener("click", () => location.reload())

    //add the user data for users list data
    setUsersData(user)

}

// START the quiz page
let startQuizPage = (insrtTitTxt, insrtPointTxt, questionList, quizSetting) => {
    main.innerHTML=""

    let logo =document.createElement("img")
    logo.id ="logo"
    logo.src ="./resources/logo/logo_placeholder_sm.png"
    logo.alt = "logo" 
    main.appendChild(logo)

    // create the main div call quiz
    let quiz =document.createElement("div")
    quiz.id="quiz"
    main.appendChild(quiz)

    // create Instructions page
    createInsrtPage(quiz, insrtTitTxt, insrtPointTxt, questionList, quizSetting)
}
