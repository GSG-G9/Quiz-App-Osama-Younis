let insrtTitTxt = "Quiz 1"

let insrtPointTxt = 
        `- Contrary to popular belief, Lorem Ipsum is not simply.
        - There are many variations of passages of Lorem Ipsu.
        - It look like readable English. Many desktop in publishin`

let questionList ={
        0: {
                question: "0 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 1
        }
        ,1: {
                question: "1 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 1
        },
        2: {
                question: "2 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 2
        },
        3: {
                question: "3 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 3
        },
        4: {
                question: "4 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 4
        },
        5: {
                question: "5 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 1
        },
        6: {
                question: "6 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 2
        },
        7: {
                question: "7 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 3
        },
        8: {
                question: "8 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 4
        },
        9: {
                question: "9 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 1
        },
        10: {
                question: "10 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 2
        },
        11: {
                question: "11 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 3
        },
        12: {
                question: "12 What is the formula for finding the volume of a cube?",
                answers: ["2x*x", "E^3", "Fish", "2*x=3x(3+4)"],
                rightAnswerNo: 4
        },

}

let quizSetting = {
        questionTimeBySecond: 20,
        questionNo: 5
}


// //Transfer from the home to Quiz Page
homeLeft.addEventListener("click",() => startQuizPage(insrtTitTxt, insrtPointTxt, questionList, quizSetting))
homeLeftImg.addEventListener("click",() =>  startQuizPage(insrtTitTxt, insrtPointTxt, questionList, quizSetting));
homeLeftTxt.addEventListener("click",() =>  startQuizPage(insrtTitTxt, insrtPointTxt, questionList, quizSetting));

//Transfer from the home to Leaderboard Page
homeRight.addEventListener("click", startLeaderboardPage);
homeRightImg.addEventListener("click", startLeaderboardPage);
homeRightTxt.addEventListener("click", startLeaderboardPage);