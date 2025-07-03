function loadScore() {
    let users = JSON.parse(localStorage.getItem('arrUsers'))
    console.log(users)
    let max1 = 0
    let max2 = 0
    let max3 = 0
    let d1
    let d2
    let d3
    let maxS
    let name1
    let name2
    let name3
    for (let i = 0; i < users.length; i++) {
        maxS = parseInt(users[i].maxScore)
        if (maxS > max1) {
            max3 = max2
            d3 = d2
            name3 = name2
            max2 = max1
            d2 = d1
            name2 = name1
            max1 = maxS
            d1 = users[i].date
            name1 = users[i].name
        }
        else if (maxS > max2) {
            max3 = max2
            d3 = d2
            name3 = name2
            max2 = maxS
            d2 = users[i].date
            name2 = users[i].name
        }
        else if (maxS > max3)
            max3 = maxS
        d3 = users[i].date
        name3 = users[i].name
    }
    //     for (let i = 0; i < users.length; i++) {
    //         for (let j = 0; j < users.length - i - 1; j++) {
    //             if (users[j].score < users[j + 1].score) {
    //                 let temp = users[j]
    //                 users[j] = users[j + 1]
    //                 users[j + 1] = temp
    //             }
    //         }
    //     }

    let myColor = JSON.parse(sessionStorage.getItem('user')).color
    document.body.style.backgroundColor = myColor



    let p1 = document.createElement('div')
    p1.id = 'p1'
    p1.innerHTML = '<p id="p111">' + name1 + '</p><p>' + max1 + '</p><p>' + d1 + '</p>'
    // p1.innerText=max1+"----"+d1

    let p2 = document.createElement('div')
    p2.id = 'p2'
    p2.innerHTML = '<p>' + name2 + '</p><p>' + max2 + '</p><p>' + d2 + '</p>'
    // p2.innerText=max2+"----"+d2

    let p3 = document.createElement('div')
    p3.id = 'p3'
    p3.innerHTML = '<p>' + name3 + '</p><p>' + max3 + '</p><p>' + d3 + '</p>'
    // p3.innerText=max3+"----"+d3

    document.body.appendChild(p1)
    document.body.appendChild(p2)
    document.body.appendChild(p3)

}
