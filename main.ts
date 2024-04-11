let zeit1 = 0
basic.showString("3")
basic.showString("2")
basic.showString("1")
basic.showString("0")
for (let index = 0; index < 10; index++) {
    control.waitMicros(randint(1000000, 5000000))
    basic.setLedColor(0xff0000)
    while (!(input.buttonIsPressed(Button.A))) {
        control.waitMicros(100000)
        zeit1 += 1
    }
    basic.turnRgbLedOff()
    basic.showNumber(zeit1)
}
basic.showString("game over", 100)
for (let index = 0; index < 5; index++) {
    basic.showNumber(zeit1, 150)
    control.waitMicros(150000)
}
basic.forever(function () {
	
})
