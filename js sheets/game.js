let allDiv = document.getElementById('all')
let score = document.getElementById('nScore')
let count = 0
// let colors = [
//         { value: '2', color: 'rgb(149,56,236)' }, { value: '4', color: 'rgb(251,86,7)' },
//         { value: '8', color: 'rgb(239,35,60)' }, { value: '16', color: 'rgb(2,62,138)' },
//         { value: '32', color: 'rgb(255,186,8)' }, { value: '64', color: 'rgb(27,67,50)' },
//         { value: '128', color: 'rgb(253,202,64)' }, { value: '256', color: 'rgb(27,38,59)' },
//         { value: '512', color: 'rgb(191,6,3)' }, { value: '1024', color: 'rgb(58,12,163)' },
//         { value: '2048', color: 'rgb(32,191,85)' }, { value: '4096', color: 'rgb(241,115,0)' },
//         { value: '8192', color: 'rgb(130,47,175)' }, { value: '16384', color: 'rgb(45,49,66)' },
//     ]
let colors = [
    { value: '2', color: '#9538ec' }, { value: '4', color: '#fb5607' },
    { value: '8', color: '#ef233c' }, { value: '16', color: '#023e8a' },
    { value: '32', color: '#ffba08' }, { value: '64', color: '#1b4332' },
    { value: '128', color: '#fdca40' }, { value: '256', color: '#1b263b' },
    { value: '512', color: '#bf0603' }, { value: '1024', color: '#3a0ca3' },
    { value: '2048', color: '#20bf55' }, { value: '4096', color: '#f17300' },
    { value: '8192', color: '#822faf' }, { value: '16384', color: '#2d3142' },
]

function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
function openScore() {
    window.location = 'highScore.html'
}
function startGame() {
    // allDiv חיצוני שבתוכו כל המטריצהdiv 
    // let d=document.createElement('button')
    // d.id='instr'
    // d.addEventListener('click',instructions)
    // document.body.appendChild(d)


    let myColor = JSON.parse(sessionStorage.getItem('user')).color
    document.body.style.backgroundColor = myColor
    document.getElementsByClassName('openbtn')[0].style.backgroundColor = myColor
    document.getElementsByClassName('openbtn')[1].style.backgroundColor = myColor

    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            let d = document.createElement('div')
            d.className = ('gameTile')
            d.id = ('d' + i + '_' + j)
            // d.setAttribute('data-i', i)
            // d.setAttribute('data-j', j)
            // מאפיין השומר אם האיבר במטריצה מלא 
            // true מלא 
            // false ריק
            d.setAttribute('data-isFull', false)
            allDiv.appendChild(d)
        }
    }
    // הגרלת מיקומים במטריצה להצבת 2
    let i = Math.ceil(Math.random() * 4)
    let j = Math.ceil(Math.random() * 4)
    // tileDiv מיקום בודד במטריצה
    console.log('d' + i + '_' + j);
    let tileDiv = document.getElementById('d' + i + '_' + j)
    tileDiv.setAttribute('data-isFull', true)
    tileDiv.style.backgroundColor = colors[0].color
    tileDiv.innerText = colors[0].value
    console.log(tileDiv.innerText);
    // הגרלה נוספת
    let i1 = Math.ceil(Math.random() * 4)
    let j1 = Math.ceil(Math.random() * 4)
    while (i1 == i && j1 == j) {
        i1 = Math.ceil(Math.random() * 4)
        j1 = Math.ceil(Math.random() * 4)
    }
    tileDiv = document.getElementById('d' + i1 + '_' + j1)

    tileDiv.setAttribute('data-isFull', true)
    tileDiv.style.backgroundColor = colors[0].color
    tileDiv.innerText = colors[0].value
    // debugger

}

function instructions() {
    console.log('hhh');
}
//פונקציית המשך משחק
//<-37 ->39
//40-למעלה-38 למטה
//press-החץ עליו נלחץ
let moved = 0
function continueGame() {
    count = 0
    moved = 0
    let press = event.keyCode
    console.log(press);
    //האם הלחיצה הייתה על חץ
    if (press > 36 && press < 41) {
        if (press == 37)
            moveLeft()
        else if (press == 39)
            moveRight()
        else if (press == 38)
            moveUp()
        else if (press == 40)
            moveDown()
        //  הגרלה נוספת רק אם היתה תזוזה
        if (moved > 0) {
            setTimeout(() => {
                let i1 = Math.ceil(Math.random() * 4)
                let j1 = Math.ceil(Math.random() * 4)
                tileDiv = document.getElementById('d' + i1 + '_' + j1)
                while (tileDiv.getAttribute('data-isFull') != "false") {
                    i = Math.ceil(Math.random() * 4)
                    j = Math.ceil(Math.random() * 4)
                    tileDiv = document.getElementById('d' + i + '_' + j)
                }
                // }
                tileDiv.setAttribute('data-isFull', true)
                tileDiv.style.backgroundColor = colors[0].color
                tileDiv.innerText = colors[0].value
            }, 300);

        }
    }
    isGameOver()
}


function moveLeft() {
    for (let i = 1; i < 5; i++) {
        for (let j = 4; j > 1; j--) {
            let tileDiv = document.getElementById('d' + i + '_' + j)
            console.log(tileDiv);
            // tileDivb המיקום לפני
            let tileDivb = document.getElementById('d' + i + '_' + (j - 1))

            if (tileDiv.getAttribute('data-isFull') == "true") {
                // if (tileDiv.style.backgroundColor!=all.style.backgroundColor) {

                //אם  המיקום הכי ימני מלא
                console.log(i + "_+" + j);
                console.log(tileDivb);

                console.log(tileDivb.getAttribute('data-isFull'))
                // debugger
                if (tileDivb.getAttribute('data-isFull') == "false") {
                    moved++
                    count++
                    //  אם המיקום לידו ריק תעביר
                    tileDivb.setAttribute('data-isFull', true)
                    tileDiv.setAttribute('data-isFull', false)
                    tileDivb.innerText = tileDiv.innerText
                    tileDivb.style.backgroundColor = tileDiv.style.backgroundColor
                    tileDiv.style.backgroundColor = all.style.backgroundColor
                    tileDiv.innerText = ''

                }
                else {

                    // אם המיקום לידו מלא תבדוק אם הם שוים
                    if (tileDivb.innerText == tileDiv.innerText) {
                        tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                        let ans = colors.find(x => x.value == tileDivb.innerText)
                        let c = ans.color
                        // debugger
                        moved++
                        count++
                        console.log(c);
                        tileDivb.style.backgroundColor = c
                        console.log(tileDiv.style.backgroundColor)
                        tileDiv.setAttribute('data-isFull', "false")
                        tileDiv.style.backgroundColor = all.style.backgroundColor
                        tileDiv.innerText = ''
                        let innerScore = parseInt(score.innerText)
                        let inb = parseInt(tileDivb.innerText)
                        score.innerText = innerScore + inb
                    }
                }
                // אם היתה תזוזה
                if (count > 0) {
                    count = 0
                    // תעבור מהמקום הנוכחי אחורה
                    for (let k = j; k < 4; k++) {
                        tileDiv = document.getElementById('d' + i + '_' + k)
                        // tileDiva המיקום ליד המקום הנוכחי מהצד השני
                        let tileDiva = document.getElementById('d' + i + '_' + (k + 1))

                        // אם המקום לפניו מלא תעביר אותו גם
                        if (k < 4 && tileDiva.getAttribute('data-isFull') == "true" && tileDiv.getAttribute('data-isFull') == "false") {
                            moved++
                            count++
                            tileDiv.setAttribute('data-isFull', true)
                            tileDiva.setAttribute('data-isFull', false)
                            tileDiv.innerText = tileDiva.innerText
                            tileDiv.style.backgroundColor = tileDiva.style.backgroundColor
                            tileDiva.style.backgroundColor = all.style.backgroundColor
                            tileDiva.innerText = ''

                            // (האחד שהזיז בהתחלה) אם הזזת תבדוק אם אפשר לחבר אותו עם האחד הבא 
                            if (tileDiv.innerText == tileDivb.innerText) {
                                tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                                let ans = colors.find(x => x.value == tileDivb.innerText)
                                let c = ans.color
                                moved++
                                count++
                                console.log(c);
                                tileDivb.style.backgroundColor = c
                                console.log(tileDiv.style.backgroundColor)
                                tileDiv.setAttribute('data-isFull', "false")
                                tileDiv.style.backgroundColor = all.style.backgroundColor
                                tileDiv.innerText = ''
                                let innerScore = parseInt(score.innerText)
                                let inb = parseInt(tileDivb.innerText)
                                score.innerText = innerScore + inb

                            }
                        }
                    }
                }
            }
        }
    }
}
function moveRight() {
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 4; j++) {
            let tileDiv = document.getElementById('d' + i + '_' + j)
            console.log(tileDiv);
            // tileDivb המיקום לפני
            let tileDivb = document.getElementById('d' + i + '_' + (j + 1))

            if (tileDiv.getAttribute('data-isFull') == "true") {
                // if (tileDiv.style.backgroundColor!=all.style.backgroundColor) {

                //אם  המיקום הכי ימני מלא
                console.log(i + "_+" + j);
                console.log(tileDivb);

                console.log(tileDivb.getAttribute('data-isFull'))
                // debugger
                if (tileDivb.getAttribute('data-isFull') == "false") {
                    moved++
                    count++
                    //  אם המיקום לידו ריק תעביר
                    tileDivb.setAttribute('data-isFull', true)
                    tileDiv.setAttribute('data-isFull', false)
                    tileDivb.innerText = tileDiv.innerText
                    tileDivb.style.backgroundColor = tileDiv.style.backgroundColor
                    tileDiv.style.backgroundColor = all.style.backgroundColor
                    tileDiv.innerText = ''
                }
                else {

                    // אם המיקום לידו מלא תבדוק אם הם שוים
                    if (tileDivb.innerText == tileDiv.innerText) {
                        tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                        let ans = colors.find(x => x.value == tileDivb.innerText)
                        let c = ans.color
                        moved++
                        count++
                        // debugger
                        console.log(c);
                        tileDivb.style.backgroundColor = c
                        console.log(tileDiv.style.backgroundColor)
                        tileDiv.setAttribute('data-isFull', "false")
                        tileDiv.style.backgroundColor = all.style.backgroundColor
                        tileDiv.innerText = ''
                        let innerScore = parseInt(score.innerText)
                        let inb = parseInt(tileDivb.innerText)
                        score.innerText = innerScore + inb
                    }
                }
                // אם היתה תזוזה
                if (count > 0) {
                    count = 0
                    // תעבור מהמקום הנוכחי אחורה
                    for (let k = j; k > 1; k--) {
                        tileDiv = document.getElementById('d' + i + '_' + k)
                        // tileDiva המיקום ליד המקום הנוכחי מהצד השני
                        let tileDiva = document.getElementById('d' + i + '_' + (k - 1))

                        // אם המקום לפניו מלא תעביר אותו גם
                        if (k > 1 && tileDiva.getAttribute('data-isFull') == "true" && tileDiv.getAttribute('data-isFull') == "false") {
                            moved++
                            count++
                            tileDiv.setAttribute('data-isFull', true)
                            tileDiva.setAttribute('data-isFull', false)
                            tileDiv.innerText = tileDiva.innerText
                            tileDiv.style.backgroundColor = tileDiva.style.backgroundColor
                            tileDiva.style.backgroundColor = all.style.backgroundColor
                            tileDiva.innerText = ''

                            // (האחד שהזיז בהתחלה) אם הזזת תבדוק אם אפשר לחבר אותו עם האחד הבא 
                            if (tileDiv.innerText == tileDivb.innerText) {
                                tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                                let ans = colors.find(x => x.value == tileDivb.innerText)
                                let c = ans.color
                                moved++
                                count++
                                console.log(c);
                                tileDivb.style.backgroundColor = c
                                console.log(tileDiv.style.backgroundColor)
                                tileDiv.setAttribute('data-isFull', "false")
                                tileDiv.style.backgroundColor = all.style.backgroundColor
                                tileDiv.innerText = ''
                                let innerScore = parseInt(score.innerText)
                                let inb = parseInt(tileDivb.innerText)
                                score.innerText = innerScore + inb
                            }
                        }
                    }
                }
            }
        }
    }
}
function moveUp() {
    for (let j = 1; j < 5; j++) {
        for (let i = 4; i > 1; i--) {
            let tileDiv = document.getElementById('d' + i + '_' + j)
            console.log(tileDiv);
            // tileDivb המיקום לפני
            let tileDivb = document.getElementById('d' + (i - 1) + '_' + j)

            if (tileDiv.getAttribute('data-isFull') == "true") {
                // if (tileDiv.style.backgroundColor!=all.style.backgroundColor) {

                //אם  המיקום הכי ימני מלא
                console.log(i + "_+" + j);
                console.log(tileDivb);

                console.log(tileDivb.getAttribute('data-isFull'))
                // debugger
                if (tileDivb.getAttribute('data-isFull') == "false") {
                    moved++
                    count++
                    //  אם המיקום לידו ריק תעביר
                    tileDivb.setAttribute('data-isFull', true)
                    tileDiv.setAttribute('data-isFull', false)
                    tileDivb.innerText = tileDiv.innerText
                    tileDivb.style.backgroundColor = tileDiv.style.backgroundColor
                    tileDiv.style.backgroundColor = all.style.backgroundColor
                    tileDiv.innerText = ''
                }
                else {

                    // אם המיקום לידו מלא תבדוק אם הם שוים
                    if (tileDivb.innerText == tileDiv.innerText) {
                        tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                        let ans = colors.find(x => x.value == tileDivb.innerText)
                        let c = ans.color
                        // debugger
                        moved++
                        count++
                        console.log(c);
                        tileDivb.style.backgroundColor = c
                        console.log(tileDiv.style.backgroundColor)
                        tileDiv.setAttribute('data-isFull', "false")
                        tileDiv.style.backgroundColor = all.style.backgroundColor
                        tileDiv.innerText = ''
                        let innerScore = parseInt(score.innerText)
                        let inb = parseInt(tileDivb.innerText)
                        score.innerText = innerScore + inb
                    }
                }
                // אם היתה תזוזה
                if (count > 0) {
                    count = 0
                    // תעבור מהמקום הנוכחי אחורה
                    for (let k = i; k < 4; k++) {
                        tileDiv = document.getElementById('d' + k + '_' + j)
                        // tileDiva המיקום ליד המקום הנוכחי מהצד השני
                        let tileDiva = document.getElementById('d' + (k + 1) + '_' + j)

                        // אם המקום לפניו מלא תעביר אותו גם
                        if (k < 4 && tileDiva.getAttribute('data-isFull') == "true" && tileDiv.getAttribute('data-isFull') == "false") {
                            moved++
                            count++
                            tileDiv.setAttribute('data-isFull', true)
                            tileDiva.setAttribute('data-isFull', false)
                            tileDiv.innerText = tileDiva.innerText
                            tileDiv.style.backgroundColor = tileDiva.style.backgroundColor
                            tileDiva.style.backgroundColor = all.style.backgroundColor
                            tileDiva.innerText = ''

                            // (האחד שהזיז בהתחלה) אם הזזת תבדוק אם אפשר לחבר אותו עם האחד הבא 
                            if (tileDiv.innerText == tileDivb.innerText) {
                                tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                                let ans = colors.find(x => x.value == tileDivb.innerText)
                                let c = ans.color
                                moved++
                                count++
                                console.log(c);
                                tileDivb.style.backgroundColor = c
                                console.log(tileDiv.style.backgroundColor)
                                tileDiv.setAttribute('data-isFull', "false")
                                tileDiv.style.backgroundColor = all.style.backgroundColor
                                tileDiv.innerText = ''
                                let innerScore = parseInt(score.innerText)
                                let inb = parseInt(tileDivb.innerText)
                                score.innerText = innerScore + inb
                            }
                        }
                    }
                }
            }
        }
    }
}
function moveDown() {
    for (let j = 1; j < 5; j++) {
        for (let i = 1; i < 4; i++) {
            let tileDiv = document.getElementById('d' + i + '_' + j)
            console.log(tileDiv);
            // tileDivb המיקום לפני
            let tileDivb = document.getElementById('d' + (i + 1) + '_' + j)
            if (tileDiv.getAttribute('data-isFull') == "true") {
                // if (tileDiv.style.backgroundColor!=all.style.backgroundColor) {
                //אם  המיקום הכי ימני מלא
                console.log(i + "_+" + j);
                console.log(tileDivb);
                console.log(tileDivb.getAttribute('data-isFull'))
                // debugger
                if (tileDivb.getAttribute('data-isFull') == "false") {
                    moved++
                    count++
                    //  אם המיקום לידו ריק תעביר
                    tileDivb.setAttribute('data-isFull', true)
                    tileDiv.setAttribute('data-isFull', false)
                    tileDivb.innerText = tileDiv.innerText
                    tileDivb.style.backgroundColor = tileDiv.style.backgroundColor
                    tileDiv.style.backgroundColor = all.style.backgroundColor
                    tileDiv.innerText = ''
                }
                else {
                    // אם המיקום לידו מלא תבדוק אם הם שוים
                    if (tileDivb.innerText == tileDiv.innerText) {
                        tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                        let ans = colors.find(x => x.value == tileDivb.innerText)
                        let c = ans.color
                        // debugger
                        moved++
                        count++
                        console.log(c);
                        tileDivb.style.backgroundColor = c
                        console.log(tileDiv.style.backgroundColor)
                        tileDiv.setAttribute('data-isFull', "false")
                        tileDiv.style.backgroundColor = all.style.backgroundColor
                        tileDiv.innerText = ''
                        let innerScore = parseInt(score.innerText)
                        let inb = parseInt(tileDivb.innerText)
                        score.innerText = innerScore + inb
                    }
                }
                if (count > 0) {
                    count = 0
                    // תעבור מהמקום הנוכחי אחורה
                    for (let k = i; k > 1; k--) {
                        tileDiv = document.getElementById('d' + k + '_' + j)
                        // tileDiva המיקום ליד המקום הנוכחי מהצד השני
                        let tileDiva = document.getElementById('d' + (k - 1) + '_' + j)
                        // אם המקום לפניו מלא תעביר אותו גם
                        if (k > 1 && tileDiva.getAttribute('data-isFull') == "true" && tileDiv.getAttribute('data-isFull') == "false") {
                            moved++
                            count++
                            tileDiv.setAttribute('data-isFull', true)
                            tileDiva.setAttribute('data-isFull', false)
                            tileDiv.innerText = tileDiva.innerText
                            tileDiv.style.backgroundColor = tileDiva.style.backgroundColor
                            tileDiva.style.backgroundColor = all.style.backgroundColor
                            tileDiva.innerText = ''
                            // (האחד שהזיז בהתחלה) אם הזזת תבדוק אם אפשר לחבר אותו עם האחד הבא 
                            if (tileDiv.innerText == tileDivb.innerText) {
                                tileDivb.innerText = parseInt(tileDiv.innerText) * 2
                                let ans = colors.find(x => x.value == tileDivb.innerText)
                                let c = ans.color
                                moved++
                                count++
                                console.log(c);
                                tileDivb.style.backgroundColor = c
                                console.log(tileDiv.style.backgroundColor)
                                tileDiv.setAttribute('data-isFull', "false")
                                tileDiv.style.backgroundColor = all.style.backgroundColor
                                tileDiv.innerText = ''
                                let innerScore = parseInt(score.innerText)
                                let inb = parseInt(tileDivb.innerText)
                                score.innerText = innerScore + inb
                            }
                        }
                    }
                }
            }
        }
    }
}
// פונקציה שבודקת האם המשחק נגמר
function isGameOver() {
    let count = 0;
    let flag = false
    for (let i = 1; i < 5 && flag != true; i++) {
        for (let j = 1; j < 5 && flag != true; j++) {
            let tileDiv = document.getElementById('d' + i + '_' + j)
            if (tileDiv.getAttribute('data-isFull') == "true") {
                count++
            }
            if (i > 1 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + (i - 1) + '_' + j).innerText) {
                flag = true
            }
            // if (j < 4 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + i + '_' + (j + 1)).innerText)
            //     return true
            if (j > 1 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + i + '_' + (j - 1)).innerText)
                flag = true
        }
    }
    // בדיקה האם הלוח מלא וגם אין מספרים זהים צמודים זה לזה
    if (count == 16) {
        saveScore()
        let p = document.createElement('p')
        p.className = 'result'
        p.innerText = 'game over'
        allDiv.appendChild(p)
        // if (isSame() == false)
        // alert("מצליח!!!!!!!!!!!!!");
        // // document.body.removeChild(allDiv);
        // // let t=document.getElementById('result')
        // let result = anime({
        //     targets: '#result',
        //     color:[{value: '#fff'},{value: 'rgb(255,0,0)'}],
        //     easing: 'linear',
        //     direction: 'alternate',
        //     duration: 2000
        // });
    }
}
// function isSame() {
//     for (let i = 1; i < 5; i++) {
//         for (let j = 1; j < 5; j++) {
//             if (i > 1 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + (i - 1) + '_' + j).innerText)
//                 return true
//             // if (j < 4 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + i + '_' + (j + 1)).innerText)
//             //     return true
//             if (j > 1 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + i + '_' + (j - 1)).innerText)
//                 return true
//             // if (i < 4 && document.getElementById('d' + i + '_' + j).innerText == document.getElementById('d' + (i + 1) + '_' + j).innerText)
//             //     return true
//         }
//     }
//     return false
// }
function saveScore() {
    let score = document.getElementById('nScore').innerText
    let i = sessionStorage.getItem('i')
    console.log(i);
    // sScore=score.innerText
    users = JSON.parse(localStorage.getItem('arrUsers'))
    console.log(users)
    if (users[i].maxScore < score) {
        users[i].maxScore = score
        let d = new Date()
        d = d.toDateString()
        users[i].date = d
        localStorage.setItem('arrUsers', JSON.stringify(users))
        console.log(localStorage.getItem('arrUsers'));
        console.log(users)
    }
}
