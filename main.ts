let air_quality = 0
radio.setGroup(11)
radio.setTransmitPower(7)
basic.forever(function () {
    air_quality = 0
    radio.sendValue("air quality", air_quality)
})
basic.forever(function () {
    basic.showNumber(air_quality)
})
