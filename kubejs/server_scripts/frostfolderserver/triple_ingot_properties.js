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
    }, 'tfc:metal/triple_ingot/copper')

    //bronze
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/bronze',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/bronze')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/bronze',
        weight: 'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/bronze')

    //bismuth_bronze
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/bismuth_bronze',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/bismuth_bronze')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/bismuth_bronze',
        weight: 'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/bismuth_bronze')

    //black_bronze
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/black_bronze',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/black_bronze')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/black_bronze',
        weight: 'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/black_bronze')

    //wrought_iron
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/wrought_iron',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/wrought_iron')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/wrought_iron',
        weight: 'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/wrought_iron')

    //steel
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/steel',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/steel')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/steel',
        weight: 'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/steel')

    //black_steel
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/black_steel',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/black_steel')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/black_steel',
        weight:'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/black_steel')

    //blue_steel
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/blue_steel',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/blue_steel')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/blue_steel',
        weight:'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/blue_steel')

    //red_steel
    event.heat({
        ingredient: 'tfc:metal/triple_ingot/red_steel',
        heatCapacity: 10.0
    }, 'tfc:heating/metal/triple_ingot/red_steel')
    
    event.itemSize({
        ingredient: 'tfc:metal/triple_ingot/red_steel',
        weight:'medium',
        size:'large'
    }, 'tfc:metal/triple_ingot/red_steel')
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

    //bronze
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/bronze',
        950
    )
    .resultFluid(Fluid.of('tfc:metal/bronze', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/bronze')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/bronze',
        'tfc:metal/double_ingot/bronze',
        'tfc:metal/ingot/bronze'
    )
    .tier(1)
    .id('tfc:welding/metal/triple_ingot/bronze')

    //bismuth_bronze
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/bismuth_bronze',
        985
    )
    .resultFluid(Fluid.of('tfc:metal/bismuth_bronze', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/bismuth_bronze')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/bismuth_bronze',
        'tfc:metal/double_ingot/bismuth_bronze',
        'tfc:metal/ingot/bismuth_bronze'
    )
    .tier(1)
    .id('tfc:welding/metal/triple_ingot/bismuth_bronze')

    //black_bronze
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/black_bronze',
        1070
    )
    .resultFluid(Fluid.of('tfc:metal/black_bronze', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/black_bronze')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/black_bronze',
        'tfc:metal/double_ingot/black_bronze',
        'tfc:metal/ingot/black_bronze'
    )
    .tier(1)
    .id('tfc:welding/metal/triple_ingot/black_bronze')

    //wrought_iron
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/wrought_iron',
        1535
    )
    .resultFluid(Fluid.of('tfc:metal/wrought_iron', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/wrought_iron')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/wrought_iron',
        'tfc:metal/double_ingot/wrought_iron',
        'tfc:metal/ingot/wrought_iron'
    )
    .tier(2)
    .id('tfc:welding/metal/triple_ingot/wrought_iron')

    //steel
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/steel',
        1540
    )
    .resultFluid(Fluid.of('tfc:metal/steel', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/steel')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/steel',
        'tfc:metal/double_ingot/steel',
        'tfc:metal/ingot/steel'
    )
    .tier(3)
    .id('tfc:welding/metal/triple_ingot/steel')

    //black_steel
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/black_steel',
        1485
    )
    .resultFluid(Fluid.of('tfc:metal/black_steel', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/black_steel')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/black_steel',
        'tfc:metal/double_ingot/black_steel',
        'tfc:metal/ingot/black_steel'
    )
    .tier(4)
    .id('tfc:welding/metal/triple_ingot/black_steel')

    //blue_steel
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/blue_steel',
        1540
    )
    .resultFluid(Fluid.of('tfc:metal/blue_steel', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/blue_steel')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/blue_steel',
        'tfc:metal/double_ingot/blue_steel',
        'tfc:metal/ingot/blue_steel'
    )
    .tier(5)
    .id('tfc:welding/metal/triple_ingot/blue_steel')

    //red_steel
    event.recipes.tfc.heating(
        'tfc:metal/triple_ingot/red_steel',
        1540
    )
    .resultFluid(Fluid.of('tfc:metal/red_steel', 300))
    .useDurability()
    .id('tfc:heating/metal/triple_ingot/red_steel')
    
    event.recipes.tfc.welding(
        'tfc:metal/triple_ingot/red_steel',
        'tfc:metal/double_ingot/red_steel',
        'tfc:metal/ingot/red_steel'
    )
    .tier(5)
    .id('tfc:welding/metal/triple_ingot/red_steel')
})
