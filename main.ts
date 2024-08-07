let umidade = 0
basic.showIcon(IconNames.Asleep)
datalogger.setColumnTitles("umidade da terra")
robotbit.Servo(robotbit.Servos.S1, 50)
basic.forever(function () {
    umidade = pins.digitalReadPin(DigitalPin.P1)
    datalogger.log(datalogger.createCV("umidade da terra", pins.digitalReadPin(DigitalPin.P1)))
    if (umidade > 1000) {
        basic.showIcon(IconNames.Square)
    } else if (umidade > 800) {
        basic.showIcon(IconNames.Happy)
        robotbit.Servo(robotbit.Servos.S1, 50)
    } else {
        basic.showIcon(IconNames.Sad)
        robotbit.Servo(robotbit.Servos.S1, 50)
        basic.pause(5000)
    }
})
