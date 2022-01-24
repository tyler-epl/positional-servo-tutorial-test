# servo-tutorial
```ghost
forever(function () {
    servos.A1.setAngle(90)
    pause(100)
        servos.A1.stop()

})
```

## Add a positional servo block
```package
servo
```
Drag a positional ``||servos:set servo A1 angle to||`` block and place it inside your forever loop


```blocks
forever(function () {
    servos.A1.setAngle(90)
})

```
## Change the angle value
A positional servo can move from 0 to 180 degrees. Let's change the ``||servos:angle||`` value to 0.

```blocks
forever(function () {
    servos.A1.setAngle(0)
})
```

## Add another positional servo block
We need to add a second ``||servos:set servo A1 angle to||`` block to tell the servo to move to the opposite side.
Let's set the value of this ``||servos:angle||`` to 180.

```blocks
forever(function () {
    servos.A1.setAngle(0)
    servos.A1.setAngle(180)
})
```

## Give it some time
If we tried running this code now, nothing would happen.
This is because we need to give our servo some time to move back and forth. The best way to do this to tell the Circuit Playground
to wait a little bit before telling the servo to change its position.
Add a ``||loops:pause||`` block after your first ``||servos:servo||`` block
and a second ``||loops:pause||`` after the second ``||servos:servo||`` block.
Change both ``||loops:pause||`` blocks to 1 second or 1000 ms.
```blocks
forever(function () {
    servos.A1.setAngle(0)
    pause(1000)
    servos.A1.setAngle(180)
    pause(1000)
})```