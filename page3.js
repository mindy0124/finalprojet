
/* sidepage3 */ 
function select(){
    var x =document.getElementById("drop_down").value;
    document.getElementById("show").innerHTML="你選擇的是:"+x
    document.getElementById("image").src = "/image/"+x+".png"
}
document.getElementsByClassName('see')[0].addEventListener('clicked',add)
function add(){
    var content=`
    <div class="barborder">
        <div class="bar bar1">
            <p>堀京子</p>
        </div>
        <div class="bar bar2">
            <p>宮村伊澄</p>
        </div>
        <div class="bar bar3">
            <p>石川透</p>
        </div>
        <div class="bar bar4">
            <p>吉川由紀</p>
        </div>
    </div>`
    var result = document.getElementsByClassName('reveal')[0]
    result.innerHTML = content
}

