namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
function add_ball () {
    R = Math.randomRange(20, 40)
    if (R % 2 == 0) {
        R += 1
    }
    Circle_sprite = sprites.create(image.create(R, R), SpriteKind.Ball)
    draw_circle(Circle_sprite, 3.6 * R, Math.randomRange(2, 10))
    Circle_sprite.setFlag(SpriteFlag.BounceOnWall, true)
    Circle_sprite.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
}
function draw_circle (Square_sprite: Sprite, N_points: number, This_color: number) {
    Degrees_per_point = Math.round(360 / N_points)
    Center_x = Square_sprite.width / 2
    Center_y = Square_sprite.width / 2
    for (let index = 0; index <= 359; index++) {
        Degrees = index + 1
        if (Degrees % Degrees_per_point == 0) {
            degrees_to_xy(Degrees, Center_x - 1, Center_x, Center_y)
            Square_sprite.image.setPixel(Return_x, Return_y, This_color)
        }
    }
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
    add_ball()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    add_ball()
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
let Center_y = 0
let Center_x = 0
let Degrees_per_point = 0
let Circle_sprite: Sprite = null
let R = 0
let Pi = 0
Pi = parseFloat("3.14159265359")
add_ball()
