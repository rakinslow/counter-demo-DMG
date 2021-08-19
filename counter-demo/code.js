let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

console.log(incrementButton)
console.log(decrementButton)
console.log(countView)

function onIncrement () {
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount + 1

    countView.textContent = newCount
}

function onDecrement () {
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount - 1

    countView.textContent = newCount
}



incrementButton.addEventListener("click", onIncrement) //call back
decrementButton.addEventListener("click", onDecrement)

function onKeypress(event) {
    console.log("you pressed a key")
    if (event.key === "ArrowRight") {}
    if (event.key === "ArrowLeft") {}
 
 }
 
 document.addEventListener("keydown", onKeypress)




