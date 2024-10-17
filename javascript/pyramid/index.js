let count = prompt("How many pyramids do you want?")

let rows = Number(count)

let message = ""

let columns = (count * 2) - 1

for (let i = 1; i <= rows; i++) {

    for (let row = 1; row <= columns; row++) {
        if (row >= rows - (i - 1) && row <= rows + (i - 1)) {
            message += "*"
        } else {
            message += " "
        }
    }
    message = message + "\n"
}

console.log(message)
