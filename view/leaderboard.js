let topTenUser = []

let startLeaderboardPage = (usersData) => {
    main.innerHTML=""

    let logo =document.createElement("img")
    logo.id ="logo"
    logo.src ="./resources/logo/logo_placeholder_sm.png"
    logo.alt = "logo" 
    main.appendChild(logo)

    // create the main div leaderboard
    let leaderboard =document.createElement("div")
    leaderboard.id="leaderboard"
    main.appendChild(leaderboard)

    let gridContainer = document.createElement("div")
    gridContainer.classList.add("grid-container")
    leaderboard.appendChild(gridContainer)

    gettopTenUser(usersData)

    let a = 0
    let cont = 0
    for (let i = 1; i <= 11*3 ; i++) {
        let temp = document.createElement("div")
        temp.classList.add("grid-item")
        gridContainer.appendChild(temp)

        if(i<=3){
            temp.classList.add("mainRow")
            switch (i) {
                case 1:
                    temp.style = " padding-top: 11%; padding-left: 6%;"
                    temp.innerText = "Rank"
                    break;
                case 2:
                    temp.style = " padding-top: 1.5%; padding-bottom: 0%;"
                    temp.innerText = "Name"
                    break;
                case 3:
                    temp.style = "padding-top: 8%"
                    temp.innerText = "Score"
                    break;
            }
        }else{
            a++
            switch (a) {
                case 1:
                    temp.innerText = cont + 1
                    temp.classList.add("Rank")
                    break;
                case 2:
                    temp.innerText = (topTenUser[cont])?topTenUser[cont].name : "---"
                    break;
                case 3:
                    temp.innerText = (topTenUser[cont])?topTenUser[cont].Score: "--"                    // temp.innerText = topTenUser[cont].score || ""
                    temp.classList.add("score")
                    a =0
                    cont++
                    break;
            }
        }
        
    }
    
    let LDToHomeBtn = document.createElement("div")
    LDToHomeBtn.id = "LDToHomeBtn"
    LDToHomeBtn.innerText = "Home"
    LDToHomeBtn.style.cursor="pointer"
    leaderboard.appendChild(LDToHomeBtn)
    
    LDToHomeBtn.addEventListener("click", () => location.reload())

}

let gettopTenUser = (usersData) => {
    let tempArray = {}
    
    usersData.forEach(user => {
        (tempArray[user.Score])? tempArray[user.Score].push(user) : tempArray[user.Score] = [user] ;
    });

    let sortedAraay = Object.keys(tempArray).sort((a, b) => b - a);
    

    let a = 0
    for (let i = 0; i < sortedAraay.length; i++) {
        const e = sortedAraay[i];
        tempArray[e].forEach(element => {
            if(a == 10)
                return

            topTenUser.push(element)
            a++
        });
    }
}

