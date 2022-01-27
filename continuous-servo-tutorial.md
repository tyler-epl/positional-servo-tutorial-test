# Continuous Rotation Servo Tutorial

```ghost
forever(function () {
    servos.A1.setAngle(0)
    pause(1000)
    servos.A1.stop()
    servos.A1.run(50)
})

```
```package
servo
```
## Program a Continuous Servo @unplugged
This tutorial will show you how to program a continuous servo to move in a circle.

![Continuous Servo Moving]()


## Add a continuous servo block
We will use code to give the continuous servo different commands through the Circuit Playground Express. A continuous servo moves in a circle. 
We can control the speed and the direction of the servo.
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Drag a ``||servos:continuous servo A1 run at||`` block and place it inside your forever loop.</br>
<i class="circle icon"></i>A1 is the name of the pin on the Circuit Playground that we will use to control the servo. You can also use 
pin A2 if you want to add a second servo.

```blocks
forever(function () {
    servos.A1.setAngle(90)
})
```
![Block Gif](https://raw.githubusercontent.com/tyler-epl/positional-servo-tutorial/master/docs/static/pos-servo-step-one-v3.gif)


## Change the speed
We can change the speed of the servo by changing the ``||servos:run at %||``
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Increase or decrease the speed of your servo. 100% is the maximum speed. 0% will shut off your servo.

```blocks
forever(function () {
    servos.A1.setAngle(0)
    // @highlight
    servos.A1.setAngle(180)
})
```

## Change the direction
You can also change the direction your servo spins. You just need to change the ``||servos:run at %||`` to a negative number.
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Slide the ``||servos:run at %||`` to a negative number. Feel free to use whatever works best for your project.

```blocks
forever(function () {
    servos.A1.setAngle(0)
    // @highlight
    pause(1000)
    servos.A1.setAngle(180)
})```


## Download & Test
The last step is to transfer your program to your Circuit Playground. 
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Click the ``||Download||`` button in the bottom left. </br>
<i class="circle icon"></i>Follow our transfer tutorial on the Cardboard Challenge website.
