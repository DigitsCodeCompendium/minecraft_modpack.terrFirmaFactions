ServerEvents.recipes(event => {
    //Stage 0: Beginner_Smith

    event.shaped('tfc:metal/pickaxe/bronze',[
        'A  ',
        'B  ',
    ],{
        A: 'tfc:metal/pickaxe_head/bronze',
        B: 'minecraft:stick',
    },)
    .id('tfc:crafting/metal/pickaxe/bronze_specialized')
})