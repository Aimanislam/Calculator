function add() {
    let num1, num2

    let UserInput1 = prompt("Please enter a value for num 1:", "123")
    let UserInput2 = prompt("Please enter a value for num 2:", "123")

    num1 = parseInt(UserInput1)
    num2 = parseInt(UserInput2)
    document.getElementById("num1-el").innerHTML = num1
    document.getElementById("num2-el").innerHTML = num2

    let sumEl = document.getElementById("sum-el")
    sumEl.innerHTML = num1 + num2
}

function sub() {
    let num1, num2
    let UserInput1 = prompt("Please enter a value for num 1:", "123")
    let UserInput2 = prompt("Please enter a value for num 2:", "123")

    num1 = parseInt(UserInput1)
    num2 = parseInt(UserInput2)
    document.getElementById("num1-el").innerHTML = num1
    document.getElementById("num2-el").innerHTML = num2
    let sumEl = document.getElementById("sum-el")
    sumEl.innerHTML = num1 - num2
}

function multiply() {
    let num1, num2
    let UserInput1 = prompt("Please enter a value for num 1:", "123")
    let UserInput2 = prompt("Please enter a value for num 2:", "123")

    num1 = parseInt(UserInput1)
    num2 = parseInt(UserInput2)
    document.getElementById("num1-el").innerHTML = num1
    document.getElementById("num2-el").innerHTML = num2
    let sumEl = document.getElementById("sum-el")
    sumEl.innerHTML = num1 * num2
}

function divide() {
    let num1, num2
    let UserInput1 = prompt("Please enter a value for num 1:", "123")
    let UserInput2 = prompt("Please enter a value for num 2:", "123")

    num1 = parseInt(UserInput1)
    num2 = parseInt(UserInput2)
    document.getElementById("num1-el").innerHTML = num1
    document.getElementById("num2-el").innerHTML = num2
    let sumEl = document.getElementById("sum-el")
    sumEl.innerHTML = num1 / num2

}

function percentage() {
    let num1, num2
    let UserInput1 = prompt("Please enter a value for num 1:", "123")
    let UserInput2 = prompt("Please enter a value for num 2:", "123")

    num1 = parseInt(UserInput1)
    num2 = parseInt(UserInput2)
    document.getElementById("num1-el").innerHTML = num1
    document.getElementById("num2-el").innerHTML = num2
    let sumEl = document.getElementById("sum-el")
    sumEl.innerHTML = num1 / num2 * 100

}