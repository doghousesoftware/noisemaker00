input.onButtonPressed(Button.A, function () {
    lightUPColumns(0)
    lightUPColumns(1)
    lightUPColumns(2)
    lightUPColumns(3)
    lightUPColumns(4)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        lightUPColumns(index)
    }
})
function lightUPColumns (xRange: number) {
    for (let index = 0; index <= 4; index++) {
        led.toggle(xRange, index)
        basic.pause(100)
    }
}
