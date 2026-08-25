//triple ingot heating and size
TFCEvents.data(event => {
    //copper
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/copper',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/copper')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/copper',
        weight: 'medium',
        size:'large'
    }, '')
})
//triple ingot recipes
ServerEvents.recipes(event => {
    //copper
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/copper',
        1080
    )
    .resultFluid(Fluid.of('tfc:metal/copper', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/copper')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/copper',
        'tfc:metal/double_ingot/copper',
        'tfc:metal/ingot/copper'
    )
    .tier(0)
    .id('tfc:welding/metal/triple_ingot/copper')
})
