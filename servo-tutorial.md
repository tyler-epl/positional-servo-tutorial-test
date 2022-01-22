# servo-tutorial
```ghost
forever(function () {
    servos.A1.setAngle(90)
})
```

## Add a positional servo block
```package
servo
```
Drag a positional servo block and place it inside your forever loop.
``||servos:set servo A1 angle to||`` block

```blocks
forever(function () {
    servos.A1.setAngle(90)
})

```
