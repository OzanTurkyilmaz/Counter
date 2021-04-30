const lowerButton = document.querySelector(".lowerButton")
const upperButton = document.querySelector(".upperButton")
let counterNumber = document.querySelector(".area")
const counterButtons = document.querySelectorAll(".counterButton")
 
let count = 0;

 
let calculate = (sayi) => {
   count += sayi
 counterNumber.innerHTML = count
checkColor()
}
let checkColor = () => {
    if(count< 0){
        counterNumber.style.color = 'red'
    }
    else if (count == 0 ) {
        counterNumber.style.color = "blue"
    } else { 
        counterNumber.style.color = "green"
    }
}
checkColor()


upperButton.addEventListener("click",() => {
  calculate(1)
   
})
lowerButton.addEventListener("click",() => {
    calculate(-1)
})
 



