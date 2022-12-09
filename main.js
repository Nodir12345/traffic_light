let box__color1 = document.querySelector(".box__color1")
let box__color2 = document.querySelector(".box__color2")
let box__color3 = document.querySelector(".box__color3")

setInterval(() => {
  box__color1.style.backgroundColor = 'red';
  box__color3.style.backgroundColor = "#333" 
  box__color2.style.backgroundColor = "#333"

}, 2000)

setInterval(() => {
  box__color2.style.backgroundColor = 'yellow'
}, 3500)
setInterval(() => {
  box__color2.style.backgroundColor = "#333"

}, 4500)

setInterval(() => {
  box__color1.style.backgroundColor = "#333"
  box__color3.style.backgroundColor = 'green' 
  box__color2.style.backgroundColor = "#333"
}, 6000)

