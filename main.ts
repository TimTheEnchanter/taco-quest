namespace SpriteKind {
    export const boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    scene.cameraShake(6, 500)
    music.bigCrash.play()
})
function startLevel1 () {
    info.setScore(0)
    info.setLife(3)
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level1`)
    mySprite = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(70, 34)
    mySprite.setStayInScreen(true)
    mySprite.setBounceOnWall(true)
    mySprite.say("ME WANT TACO", 1000)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    for (let index = 0; index < 10; index++) {
        taco = sprites.create(img`
            . . . . . . . e e e e . . . . . 
            . . . . . e e 4 5 5 5 e e . . . 
            . . . . e 4 5 6 2 2 7 6 6 e . . 
            . . . e 5 6 6 7 2 2 6 4 4 4 e . 
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
            e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
            e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
            e 5 e c 5 4 5 4 5 5 5 e e . . . 
            e 5 e e 5 5 5 5 5 4 e . . . . . 
            4 5 4 e 5 5 5 5 e e . . . . . . 
            . 4 5 4 5 5 4 e . . . . . . . . 
            . . 4 4 e e e . . . . . . . . . 
            `, SpriteKind.Food)
        taco.setPosition(randint(15, 250), randint(15, 220))
        music.pewPew.play()
        pause(2000)
    }
}
info.onCountdownEnd(function () {
    effects.confetti.startScreenEffect()
    game.over(true)
})
function startLevel2 () {
    tiles.setTilemap(tilemap`level1`)
    mySprite.setPosition(70, 34)
    mySprite.say("ME WANT MORE", 1500)
    mySprite.startEffect(effects.fire, 500)
    for (let index = 0; index < 20; index++) {
        taco = sprites.create(img`
            . . . . . . . e e e e . . . . . 
            . . . . . e e 4 5 5 5 e e . . . 
            . . . . e 4 5 6 2 2 7 6 6 e . . 
            . . . e 5 6 6 7 2 2 6 4 4 4 e . 
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
            e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
            e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
            e 5 e c 5 4 5 4 5 5 5 e e . . . 
            e 5 e e 5 5 5 5 5 4 e . . . . . 
            4 5 4 e 5 5 5 5 e e . . . . . . 
            . 4 5 4 5 5 4 e . . . . . . . . 
            . . 4 4 e e e . . . . . . . . . 
            `, SpriteKind.Food)
        taco.setPosition(randint(15, 250), randint(15, 220))
        music.pewPew.play()
        pause(1500)
        enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        enemy1.setPosition(randint(10, 150), randint(10, 110))
        enemy1.setBounceOnWall(true)
        enemy1.setVelocity(randint(-100, 100), randint(-100, 100))
        enemy1.lifespan = 4500
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.jumpUp.play()
    otherSprite.destroy()
})
function startLevel3 () {
    tiles.setTilemap(tilemap`level1`)
    mySprite.setPosition(70, 34)
    mySprite.say("TACO MAD", 1500)
    mySprite.startEffect(effects.fire, 500)
    eviltaco = sprites.create(img`
        ..............eeeeeee...........
        ............ee455662e2e.........
        ..........ee45556723e2688.......
        .........e46776677232e777668....
        ........e46745554772227776778...
        .......4448744444777766777678...
        ......4522e7777776777766676668..
        .....4523227766722e666eeeee888..
        ....455232e76672322e4555dddd48..
        ...44567777554623e455ddddddddd4.
        ...e66774554477e455dddd55554dd44
        ..e46777444677e55dd55555d55dddd4
        ..e5668677666e5dd555555555555dde
        .e45544e8776e5d555554555555555de
        .e554eeee66e5d5555d55555dddd54de
        .e55ee44fee5d5d555555d5d5dddddde
        e454eeeefe45d55555555555dd4ddde.
        e5e4eefffe5d55555555d5555dddde..
        e5ee4eeff45d555555555555dddde...
        e5eeeeffe5d55d555d5555d5ddde....
        e5ffefeee5d55545555555ddd4e.....
        e5ffffffe545555555d5d4ddee......
        e54efeff45d55d55555dddde........
        e5eeeffe5dd5555545dddee.........
        e4eeefff5d5555d55ddde...........
        e4efefff5d5d55555d4e............
        .e4efffe5d555555dee.............
        .e54eeee5d545dd4e...............
        ..e554ee5dddddee................
        ...ee5544dddee..................
        .....eeeeeee....................
        ................................
        `, SpriteKind.boss)
    eviltaco.setBounceOnWall(true)
    eviltaco.setPosition(randint(10, 150), randint(10, 110))
    info.startCountdown(20)
    eviltaco.setVelocity(randint(-100, 100), randint(-100, 100))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    music.smallCrash.play()
    otherSprite.destroy()
})
let eviltaco: Sprite = null
let enemy1: Sprite = null
let taco: Sprite = null
let mySprite: Sprite = null
let level2check = 0
let level3check = 0
game.splash("Taco Quest", "By James")
effects.blizzard.startScreenEffect()
pause(1000)
story.printText("Do you know what time it is?", 20, 0, 1, 0, story.TextSpeed.Slow)
pause(1000)
story.printText("TACO TIME", 20, 20, 1, 0, story.TextSpeed.Normal)
pause(2000)
game.splash("Collect 10 Tacos")
effects.blizzard.endScreenEffect()
startLevel1()
game.onUpdateInterval(100, function () {
    if (info.score() == 10) {
        if (level2check == 0) {
            level2check += 1
            game.splash("Collect 20 Tacos")
            startLevel2()
        }
    }
    if (info.score() == 30) {
        if (level3check == 0) {
            level3check += 1
            game.showLongText("The Taco Dungeons have been cleared!", DialogLayout.Center)
            music.baDing.play()
            enemy1.setFlag(SpriteFlag.AutoDestroy, true)
            game.splash("Avoid the Evil Mega Taco until the timer runs out!")
            startLevel3()
        }
    }
})
