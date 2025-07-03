

function addName() {

    // event.preventDefault()

    myName = document.getElementById('Fname').value
    myPass = document.getElementById('Fpass').value
    myColor = document.getElementById('c').value

    if (myName != "" && myPass != "") {
        debugger
        let users
        debugger
        if (localStorage.getItem('arrUsers') == null)
            users = []
        else
            users = JSON.parse(localStorage.getItem('arrUsers'))

        let user = {
            name: myName,
            password: myPass,
            index: users.length,
            maxScore: 0,
            date: new Date(),
            color: myColor
        }

        sessionStorage.setItem('i', users.length)
        // sessionStorage.setItem('user', JSON.stringify(user))
        users.push(user)
        // users.push(user)

        localStorage.setItem('arrUsers', JSON.stringify(users))

        event.preventDefault()

        window.location = 'login.html'
    }
}