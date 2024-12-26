var card = document.querySelector('card')
var btn = document.querySelector('button')
btn.addEventListener('click',function(){
    var h3 = document.querySelector('h3')
    h3.innerHTML = "We are friends"
    h3.style.color = "green"
    
})
var btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',function(){
    
    var h3 = document.querySelector('h3')
    h3.innerHTML = "strenger"
    h3.style.color = "red"
})