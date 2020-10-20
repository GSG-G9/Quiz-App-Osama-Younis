let insrtTitTxt = "Quiz 1"

let insrtPointTxt = 
        `- Contrary to popular belief, Lorem Ipsum is not simply.
        - There are many variations of passages of Lorem Ipsu.
        - It look like readable English. Many desktop in publishin`


// //Transfer from the home to Quiz Page
homeLeft.addEventListener("click",() => startQuizPage(insrtTitTxt, insrtPointTxt))
homeLeftImg.addEventListener("click",() =>  startQuizPage(insrtTitTxt, insrtPointTxt));
homeLeftTxt.addEventListener("click",() =>  startQuizPage(insrtTitTxt, insrtPointTxt));

//Transfer from the home to Leaderboard Page
homeRight.addEventListener("click", startLeaderboardPage);
homeRightImg.addEventListener("click", startLeaderboardPage);
homeRightTxt.addEventListener("click", startLeaderboardPage);