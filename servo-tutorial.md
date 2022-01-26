# Positional Servo Tutorial

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
## Program a Positional Servo @unplugged
This tutorial will show you how to program a positional servo to move back and forth.

![Positional Servo Moving]()


## Add a positional servo block @fullscreen
We will use code to give the positional servo different commands through the Circuit Playground Express. A positional servo 
can move from 0 - 180 degrees. We can tell the servo to go any postion along this movement arc by telling it to go to an exact angle.
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Drag a positional ``||servos:set servo A1 angle to||`` block and place it inside your forever loop.</br>
<i class="circle icon"></i>A1 is the name of the pin on the Circuit Playground that we will use to control the servo. You can also use 
pin A2 if you want to add a second servo.

```blocks
forever(function () {
    servos.A1.setAngle(90)
})
```
![Block Gif](https://raw.githubusercontent.com/tyler-epl/positional-servo-tutorial/master/docs/static/pos-servo-step-one-v3.gif)

## Change the angle value @fullscreen
We are going to program a servo to swing back and forth. To do this, we need to tell it to move to two different positions. 
Let set the first position.
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Change the ``||servos:angle||`` value to 0 degrees.

```blocks
forever(function () {
    servos.A1.setAngle(0)
})
```

## Add another positional servo block @fullscreen
We need a second block to tell the servo to move to the opposite side.
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Add a second ``||servos:set servo A1 angle to||`` block under the first one.</br>
<i class="circle icon"></i>Let's set the value of this ``||servos:angle||`` to 180 degrees.

```blocks
forever(function () {
    servos.A1.setAngle(0)
    // @highlight
    servos.A1.setAngle(180)
})
```

## Give it some time @fullscreen @diffs true
If we tried running this code now, nothing would happen. This is because we need to give our servo some time to move back and forth. 
The best way to do this is to tell the Circuit Playground to wait a little bit before telling the servo to change its position.
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Add a ``||loops:pause||`` block after your first ``||servos:servo||`` block
and a second ``||loops:pause||`` after the second ``||servos:servo||`` block (``||loops:pause||`` blocks are under the ``||loops:loops||`` tab).
</br><i class="circle icon"></i>Change both ``||loops:pause||`` blocks to 1 second which is 1000 ms (ms = milliseconds).
```blocks
forever(function () {
    servos.A1.setAngle(0)
    // @highlight
    pause(1000)
    servos.A1.setAngle(180)
})```
```blocks
forever(function () {
    servos.A1.setAngle(0)
    pause(1000)
    servos.A1.setAngle(180)
    // @highlight
    pause(1000)
})```

## Download & Test
The last step is to transfer your program to your Circuit Playground. 
</br><i class="window minimize outline icon"></i></br>
<i class="circle icon"></i>Click the ``||Download||`` button in the bottom left. </br>
<i class="circle icon"></i>Follow our transfer tutorial on the Cardboard Challenge website.

