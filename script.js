const sub1 = document.querySelector("#sub1")
const sub2 = document.querySelector("#sub2")

const buttons = document.querySelectorAll(".digits")
const operators = document.querySelectorAll(".operators")
const clear = document.querySelector("#clear")
const clearAll = document.querySelector("#clearAll")
const equal = document.querySelector("#equal")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (sub2.textContent == "0") {
            sub2.textContent = button.textContent
        }else {
            if (sub1.textContent.slice(-1) == "=") {
                sub1.textContent = ""
                sub2.textContent = button.textContent
            } else {
                sub2.textContent += button.textContent
            }

        }

    })
})

clear.addEventListener("click", () => {
    sub2.textContent = sub2.textContent.slice(0,-1)
    
})

clearAll.addEventListener("click", () => {
    sub1.textContent = ""
    sub2.textContent = "0"
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (sub1.textContent.slice(-1) == "=") {
            sub1.textContent = sub2.textContent + operator.textContent
            sub2.textContent = ""
        }else {
            sub1.textContent += sub2.textContent + operator.textContent
            sub2.textContent = ""
        }

    })
})

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

equal.addEventListener("click", () => {
    sub1.textContent += sub2.textContent + equal.textContent
    sub2.textContent = parse(sub1.textContent.slice(0,-1))
})