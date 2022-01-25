let indeks = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(indeks)
    indeks += 0 - 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(indeks)
    indeks = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(indeks)
    indeks += 0 + 1
})
