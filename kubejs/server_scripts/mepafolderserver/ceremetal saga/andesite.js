ServerEvents.recipes(event =>{
    
    event.shaped(
        Item.of('terra:unfired_ceremetal'),

        [
            'AB ',    
            'BA ',
            '   '
        ],{
            A: 'tfc:powder/bismuthinite',
            B: 'minecraft:clay_ball'
        }
    )

    event.remove({output: 'create:andesite_alloy'})

    event.recipes.tfc.heating(
        'terra:unfired_ceremetal',
        1500
    )

    .itemOutput('create:andesite_alloy')
})