forever(function () {
    servos.A1.setAngle(0)
    pause(1000)
    servos.A1.stop()
    servos.A1.run(50)
})
