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
        ['copper',1080,1],
        ['bronze',950,2],
        ['bismuth_bronze',985,2],
        ['black_bronze',1070,2],
        ['wrought_iron',1535,3],
        ['steel',1540,4],
        ['black_steel',1485,5],
        ['red_steel',1540,6],
        ['blue_steel',1540,6]]
    metals.forEach(([metal,heat,tier]) => {
        //triple ingot
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

        //sledgehammer
        event.recipes.tfc.heating(`tfc_hammer_time:metal/sledgehammer_head/${metal}`,heat)
            .resultFluid(Fluid.of(`tfc:metal/${metal}`, 600))
            .useDurability()
            .id(`tfc_hammer_time:heating/sledgehammer_head/${metal}`)
        event.recipes.tfc.heating(`tfc_hammer_time:metal/sledgehammer/${metal}`,heat)
            .resultFluid(Fluid.of(`tfc:metal/${metal}`, 650))
            .useDurability()
            .id(`tfc_hammer_time:heating/sledgehammer/${metal}`)
        event.recipes.tfc.anvil(
            `tfc_hammer_time:metal/sledgehammer_head/${metal}`,
            `tfc_items:${metal}_heavy_sheet`,
            ['bend_last','upset_second_last','draw_third_last'])
        .tier(tier)
        .id(`tfc_hammer_time:anvil/metal/sledgehammer_head/${metal}`)
        
        //excavator
        event.recipes.tfc.heating(`tfc_hammer_time:metal/excavator_head/${metal}`,heat)
            .resultFluid(Fluid.of(`tfc:metal/${metal}`, 600))
            .useDurability()
            .id(`tfc_hammer_time:heating/excavator_head/${metal}`)
        event.recipes.tfc.heating(`tfc_hammer_time:metal/excavator/${metal}`,heat)
            .resultFluid(Fluid.of(`tfc:metal/${metal}`, 650))
            .useDurability()
            .id(`tfc_hammer_time:heating/excavator/${metal}`)
        event.recipes.tfc.anvil(
            `tfc_hammer_time:metal/excavator_head/${metal}`,
            `tfc_items:${metal}_heavy_sheet`,
            ['punch_last','upset_second_last','upset_third_last'])
        .tier(tier)
        .id(`tfc_hammer_time:anvil/metal/excavator_head/${metal}`)
    })
    })