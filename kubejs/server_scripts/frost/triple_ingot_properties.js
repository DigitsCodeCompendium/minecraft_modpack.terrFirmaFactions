//triple ingot heating and size
TFCEvents.data(event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.heat({
            ingredient: `tfc:metal/triple_ingot/${metal}`,
            heatCapacity: 10.0
        }, `tfc:heating/metal/triple_ingot/${metal}`)
        event.itemSize({
            ingredient: `tfc:metal/triple_ingot/${metal}`,
            weight: 'medium',
            size:'large'
        }, `tfc:metal/triple_ingot/${metal}`)
    })  
})

ServerEvents.recipes(event => {
    const metals = [
        ['copper',1080,0],
        ['bronze',950,1],
        ['bismuth_bronze',985,1],
        ['black_bronze',1070,1],
        ['wrought_iron',1535,2],
        ['steel',1540,3],
        ['black_steel',1485,4],
        ['red_steel',1540,5],
        ['blue_steel',1540,5]]
    metals.forEach(([metal,heat,tier]) => {
        event.recipes.tfc.heating(`tfc:metal/triple_ingot/${metal}`,heat)
            .resultFluid(Fluid.of(`tfc:metal/${metal}`, 300))
            .useDurability()
            .id(`tfc:heating/metal/triple_ingot/${metal}`)
        event.recipes.tfc.welding(
            `tfc:metal/triple_ingot/${metal}`,
            `tfc:metal/double_ingot/${metal}`,
            `tfc:metal/ingot/${metal}`)
            .tier(tier)
            .id(`tfc:welding/metal/triple_ingot/${metal}`)
        })
    })