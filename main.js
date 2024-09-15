let width = document.getElementById('width')
let height = document.getElementById('height')
let border = document.getElementById('border')
let color = document.getElementById('color')
let btn = document.getElementById('change')
let box = document.getElementsByClassName('square')[0]
function ChangeBox() {
    box.style.width = width.value + "vw";
    box.style.height = height.value + "vh";
    box.style.borderRadius = border.value + "px";
    box.style.backgroundColor = color.value ;

}

function resetBox() {
    box.style.width = "30vw";
    box.style.height = "40vh";
    box.style.borderRadius = "2px";
    box.style.backgroundColor = "blue" ;

}