ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:stick'), 
        [
            '#tfc:twigs',
        ])
        .id('tfc:stick_to_twig')
})