
function checkName() {
    // אם יש תו שהוא לא אות אל תכתוב אותו
    let alef = 'א'.charCodeAt(0)
    let taf = 'ת'.charCodeAt(0)
    let a = 'a'.charCodeAt(0)
    let z = 'z'.charCodeAt(0)
    let aa = 'A'.charCodeAt(0)
    let zz = 'Z'.charCodeAt(0)
    let r = ' '.charCodeAt(0)
    let code = event.keyCode
    if (!((code >= alef && code <= taf) || (code >= a && code <= z) || (code >= aa && code <= zz) || code == r)) {

        event.preventDefault()
    }
}
function checkPass() {
    let a1 = '0'.charCodeAt(0)
    let a2 = '9'.charCodeAt(0)
    let code = event.keyCode
    console.log(code);
    if (code <= a1 || code >= a2)
        event.preventDefault()

}
function isFull() {
    let n = event.currentTarget
    if (n.value == "") {
        n.focus()
        console.log(n);
    }
}
function saveName() {
    event.preventDefault()

    let Sname = document.getElementById('name').value
    let Spassword = document.getElementById('pass').value

    if (Sname != "" && Spassword != "") {
        let users
        let flag = false
        if (localStorage.getItem('arrUsers') == null)
            window.location = '../html sheets/signUp.html'
        else {
            debugger
            users = JSON.parse(localStorage.getItem('arrUsers'))
            // בדק אם המשתמש קיים במערך המשתמשים
            let i;
            console.log(users[users.length - 1]);
            console.log(users.length);
            if (users[users.length - 1].name == Sname && users[users.length - 1].password == Spassword) {
                sessionStorage.setItem('i', users.length - 1)
                sessionStorage.setItem('user', JSON.stringify(users[users.length - 1]))
                // changeColor()
                window.location = 'game.html'
            }
            else {
                for (i = 0; i < users.length && flag == false; i++) {
                    // אם מצאת שם זהה
                    // if (Sname == users[i].name) {
                    //     // אם גם הקוד זהה
                    //     if (Spassword != users[i].password) {
                    //         flag = true
                    //         window.location = 'signUp.html'
                    //     }
                    //     else {
                    //         flag = true
                    //         sessionStorage.setItem('i',i)
                    //         sessionStorage.setItem('user',JSON.stringify(users[i]))
                    //         // changeColor()
                    //         window.location='game.html'
                    //     }
                    // }
                    if (Sname == users[i].name && Spassword == users[i].password) {
                        flag = true
                        sessionStorage.setItem('i', i)
                        sessionStorage.setItem('user', JSON.stringify(users[i]))
                        // changeColor()
                        window.location = 'game.html'
                    }

                }
            }
            if (i == users.length)

                window.location = 'signUp.html'

        }
    }
    // function changeColor(){
    //     let myColor= JSON.parse(sessionStorage.getItem('user')).color
    //     document.body.style.backgroundColor=myColor
}