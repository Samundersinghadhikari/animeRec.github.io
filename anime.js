let search = document.querySelector("#search")
let input = document.querySelector(".my-input")
let ham = document.querySelector("#ham")
let sam = document.querySelector(".sam")
search.addEventListener("click",function () {
input.classList.toggle("setter")
})


ham.addEventListener("click",function () {
sam.classList.toggle("setter")
})


