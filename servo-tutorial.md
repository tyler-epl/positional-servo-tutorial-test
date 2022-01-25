# Positional Servo Tutorial

```ghost
forever(function () {
    servos.A1.setAngle(0)
    pause(1000)
    servos.A1.stop()
    servos.A1.run(50)
})

```
### @diffs true
### @explicitHints true


## Add a positional servo block @showdialog
```package
servo
```
Drag a positional ``||servos:set servo A1 angle to||`` block and place it inside your forever loop.


```blocks
forever(function () {
    servos.A1.setAngle(90)
})

```
## Change the angle value @showhint
We are going to program a servo to swing back and forth. A positional servo can move from 0 to 180 degrees, so let's set the first position 
by changing the ``||servos:angle||`` value to 0 degrees.

```blocks
forever(function () {
    servos.A1.setAngle(0)
})
```

## Add another positional servo block
We need to add a second ``||servos:set servo A1 angle to||`` block to tell the servo to move to the opposite side.
Let's set the value of this ``||servos:angle||`` to 180 degrees.

```blocks
forever(function () {
    servos.A1.setAngle(0)
    // @highlight
    servos.A1.setAngle(180)
})
```

## Give it some time
If we tried running this code now, nothing would happen.
This is because we need to give our servo some time to move back and forth. The best way to do this to tell the Circuit Playground
to wait a little bit before telling the servo to change its position.
Add a ``||loops:pause||`` block after your first ``||servos:servo||`` block
and a second ``||loops:pause||`` after the second ``||servos:servo||`` block.
Change both ``||loops:pause||`` blocks to 1 second which is 1000 ms(ms = milliseconds).
```blocks
forever(function () {
    servos.A1.setAngle(0)
    pause(1000)
    servos.A1.setAngle(180)
    pause(1000)
})```