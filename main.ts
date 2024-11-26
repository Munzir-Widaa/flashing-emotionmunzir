input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(200)
    }
})
