//add popup addbox and button
var popupp=document.querySelector(".popupp")
var movieadd=document.querySelector(".movie-add")
var plusbutton=document.querySelector(".plusbutton")

plusbutton.addEventListener("click",function(){
    popupp.style.display="block"
    movieadd.style.display="block"

})

//cancel button
var cancelpopup=document.getElementById("cancel-popup")


cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupp.style.display="none"
    movieadd.style.display="none"


})


// adding movie-name-input,Director-name-input,movie-descrption,add-movie button

var container=document.querySelector(".maincontainer")

var addmovie=document.getElementById("addmovie")

var moviename=document.getElementById("movienameinput")

var directorname=document.getElementById("directorname")

var moviedesc=document.getElementById("movie-descrption")




addmovie.addEventListener("click",function(event){
    event.preventDefault()


    var div=document.createElement("div")

    div.setAttribute("class","boxx")
    div.innerHTML=`<h2>${moviename.value}</h2>
    <h5>${directorname.value}</h5>
    <p>${moviedesc.value}</p>
    <button onclick="rem(event)" id="delete1">Delete</button>`
    container.append(div)
    popupp.style.display="none"
    movieadd.style.display="none"
})

function rem(event){
    event.target.parentElement.remove()

}