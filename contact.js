var contact = document.querySelector(".contact")
var button = document.getElementById(".sumbit")


button.addEventListener("click",function(){
    contact.style.display="block"
    input.style.display="block"
})

var cancelpopup = document.getElementById(".cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    contact.style.display="none"
     input.style.display="none"
}) 

var name = document.getElementById("name")
var email = document.getElementById("Email")
var message = document.getElementById("message")

var div = document.createElement("div")
     div.setAttribute("class","contact-item")
     div.innerHTML=`<h2>${name.value}</h2>
    <h5>${Email.value}</h5>
    <p>${message.value}</p>