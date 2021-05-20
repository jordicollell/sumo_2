let marxa = 0
input.onButtonPressed(Button.A, function () {
    basic.pause(3000)
    marxa = 1
})
basic.forever(function () {
    if (marxa == 1) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(100, 100)
        } else {
            cuteBot.motors(-100, -100)
            basic.pause(1000)
            cuteBot.motors(60, -60)
            basic.pause(500)
            cuteBot.motors(100, 100)
        }
    }
})
