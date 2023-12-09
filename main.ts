let y = 0
let x = 0
led.plot(x, y)
for (let index = 0; index <= 4; index++) {
    led.plot(x, y)
}
led.plot(x, y + 1)
for (let x = 0; x <= 4; x++) {
    led.plot(y, x - 1)
}
