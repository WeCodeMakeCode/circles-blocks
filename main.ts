namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const Circle = SpriteKind.create()
}
function make_circle (Radius: number, Color: number) {
    Wh = 2 * Radius
    Circle_sprite = sprites.create(image.create(Wh, Wh), SpriteKind.Circle)
    Center_x = Circle_sprite.width / 2
    Center_y = Center_x
    N_points = 3 * Radius
    Degrees_per_point = Math.round(360 / N_points)
    for (let index = 0; index <= N_points - 1; index++) {
        Degrees = index * Degrees_per_point
        degrees_to_xy(Degrees, Radius, Center_x, Center_y)
        Circle_sprite.image.setPixel(Return_x, Return_y, Color)
    }
}
function add_circle () {
    Radius = Math.randomRange(20, 80)
    make_circle(Radians, 3)
    Circle_sprite.setFlag(SpriteFlag.BounceOnWall, true)
    Circle_sprite.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Ball, function (sprite, otherSprite) {
    if (sprite.width < otherSprite.width) {
        sprite.setVelocity(0 - otherSprite.vx, 0 - otherSprite.vy)
        sprite.destroy()
    } else {
        otherSprite.setVelocity(0 - sprite.vx, 0 - sprite.vy)
        otherSprite.destroy()
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    add_circle()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    add_circle()
})
function degrees_to_xy (Degrees: number, Radius: number, Center_x: number, Center_y: number) {
    Radians = Degrees * Pi / 180
    Return_x = Math.floor(Center_x + Radius * Math.cos(Radians))
    Return_y = Math.floor(Center_y + Radius * (0 - Math.sin(Radians)))
}
let Radians = 0
let Return_y = 0
let Return_x = 0
let Degrees = 0
let Degrees_per_point = 0
let Radius = 0
let N_points = 0
let Center_y = 0
let Center_x = 0
let Circle_sprite: Sprite = null
let Wh = 0
let Pi = 0
Pi = parseFloat("3.14159265359")
add_circle()
