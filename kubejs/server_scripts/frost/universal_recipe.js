ServerEvents.recipes(event => {
    //add
    event.shapeless(Item.of('minecraft:stick'), ['#tfc:twigs',]).id('tfc:stick_to_twig')
    //remove
    event.remove({output: '#supplementaries:cannon_boats'})

})

RecipeViewerEvents.removeEntries('item', event => {
	event.remove('#minecraft:boats')
})

ServerEvents.recipes(event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze']
    metals.forEach(metal => {
        event.recipes.tfc.casting(
            `tfc_hammer_time:metal/sledgehammer_head/${metal}`,
            `tfc_hammer_time:ceramic/sledgehammer_head_mold`,
            Fluid.of(`tfc:metal/${metal}`,600),1
        ).id(`tfc_hammer_time:casting/sledgehammer/${metal}`)
        event.recipes.tfc.casting(
            `tfc_hammer_time:metal/excavator_head/${metal}`,
            `tfc_hammer_time:ceramic/excavator_head_mold`,
            Fluid.of(`tfc:metal/${metal}`,600),1
        ).id(`tfc_hammer_time:casting/excavator/${metal}`)
    })})

ServerEvents.recipes(event => {
  event.remove('tfcthings:knapping/whetstone')
  
})