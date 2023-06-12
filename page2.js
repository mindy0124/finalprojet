

function move(input){
    var a = document.getElementsByClassName('word1')[0]
    var b = document.getElementsByClassName('word2')[0]
    var c = document.getElementsByClassName('word3')[0]
    var d = document.getElementsByClassName('word4')[0]
    switch (input){
        case 0:
            a.style.color='transparent'
            b.style.color='transparent'
            c.style.color='transparent'
            d.style.color='transparent'
            break
        case 1:
            a.style.color='black'
            break 
        case 2:
            b.style.color='black'
            break
        case 3:
            c.style.color='black'
            break
        case 4:
            d.style.color='black'
            break 
    }
}