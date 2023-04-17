let air_quality = 0
basic.forever(function () {
    air_quality = 0
    radio.sendValue("air quality", air_quality)
})
basic.forever(function () {
    basic.showNumber(air_quality)
    if (air_quality > 10) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
