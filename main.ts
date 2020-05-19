namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const Circle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Circle, SpriteKind.Circle, function (sprite, otherSprite) {
    if (sprite.width < otherSprite.width) {
        otherSprite.follow(sprite)
    } else {
        sprite.follow(otherSprite)
    }
})
function add_circle () {
    Radius = Math.randomRange(20, 60)
    info.setScore(color_number)
    get_color()
    make_circle(Radius, color_number)
    Circle_sprite.setFlag(SpriteFlag.BounceOnWall, true)
    Circle_sprite.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
}
function make_circle (Radius: number, Color: number) {
    Wh = 2 * Radius
    circle_image = image.create(Wh, Wh)
    Circle_sprite = sprites.create(circle_image, SpriteKind.Circle)
    Center_x = Circle_sprite.width / 2
    Center_y = Center_x
    N_points = 4 * Radius
    Degrees_per_point = Math.ceil(360 / N_points)
    for (let index = 0; index <= N_points; index++) {
        Degrees = index * Degrees_per_point
        degrees_to_xy(Degrees, Radius, Center_x, Center_y)
        Circle_sprite.image.setPixel(Return_x, Return_y, Color)
    }
}
function get_color () {
    color_number = (color_number + 1) % 12
}
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
let N_points = 0
let Center_y = 0
let Center_x = 0
let circle_image: Image = null
let Wh = 0
let Circle_sprite: Sprite = null
let Radius = 0
let color_number = 0
let Pi = 0
Pi = parseFloat("3.14159265359")
color_number = 0
add_circle()
