ServerEvents.recipes(event => {
    //add
    event.shapeless(Item.of('minecraft:stick'), ['#tfc:twigs',]).id('tfc:stick_to_twig')
    //remove
    event.remove({output: '#supplementaries:cannon_boats'})

})

RecipeViewerEvents.removeEntries('item', event => {
	event.remove('#minecraft:boats')
})
