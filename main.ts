function punke (num: number) {
    basic.clearScreen()
    if (num == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (num == 2) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
        }
    } else if (num == 3) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        }
    } else if (num == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (num == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (num == 6) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                . . . . .
                . # # # .
                . . . . .
                `)
        }
    } else if (num == 7) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # # # .
                . # . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                . . # . .
                . # # # .
                . . . . .
                `)
        }
    } else if (num == 8) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (num == 9) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    if (max == 6) {
        max = 9
    } else {
        max = 6
    }
    basic.showNumber(max)
})
input.onGesture(Gesture.ScreenUp, function () {
    if (tilt == 1) {
        nix = randint(1, input.acceleration(Dimension.X))
        nix = randint(1, input.acceleration(Dimension.Y))
        punke(randint(1, max))
        tilt = 0
    }
})
input.onButtonPressed(Button.B, function () {
    nix = randint(1, input.acceleration(Dimension.Y))
    nix = randint(1, input.acceleration(Dimension.Z))
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    punke(randint(1, max))
})
input.onGesture(Gesture.Shake, function () {
    tilt = 1
    if (Math.randomBoolean()) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . . . . .
            . . # . .
            `)
    }
})
let nix = 0
let max = 0
let tilt = 0
basic.showIcon(IconNames.Square)
tilt = 0
max = 6
led.setBrightness(31)
basic.forever(function () {
	
})
