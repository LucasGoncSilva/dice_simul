const input = require('readline-sync')

function ask_play() {
    let answer = input.keyInYNStrict('Wanna play?')

    if (answer == true) {
        roll()
    } else {
        console.log('Ok, I tried my best and I think I disappointed U.. My bad!')
    }
}

function roll() {
    const dice_count = input.questionInt('How many dices? (at least 1): ')
    const dice_faces = input.questionInt('How many faces on each dice? (at least 2): ')

    for (const dice in [...Array(dice_count).keys()]) {
        let final_num = Number(Math.floor(Math.random() * (dice_faces + 1)))

        if (final_num === 0) {
            final_num = Number(Math.floor(Math.random() * (dice_faces))) + 1
        }

        console.log(`dice ${Number.parseInt(dice) + 1}: ${final_num}`)
    }

    ask_play()
}

ask_play()