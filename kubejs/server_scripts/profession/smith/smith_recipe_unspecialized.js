ServerEvents.recipes(event => {
    const metals = [
        ['copper',1],
        ['bronze',2],
        ['bismuth_bronze',2],
        ['black_bronze',2],
        ['wrought_iron',3],
        ['steel',4],
        ['black_steel',5],
        ['red_steel',6],
        ['blue_steel',6]]
    metals.forEach(([metal,tier]) => { 
        //armor
        event.recipes.tfc.welding(
            `tfc:metal/helmet/${metal}`,
            `tfc:metal/unfinished_helmet/${metal}`,
            `#c:double_sheets/${metal}`
        )
        .tier(tier)
        .id(`tfc:welding/metal/helmet/${metal}_unspecialized`)
        
        event.recipes.tfc.welding(
            `tfc:metal/chestplate/${metal}`,
            `tfc:metal/unfinished_chestplate/${metal}`,
            `tfc_items:${metal}_heavy_sheet`
        )
        .tier(tier)
        .id(`tfc:welding/metal/chestplate/${metal}_unspecialized`)
        
        event.recipes.tfc.welding(
            `tfc:metal/greaves/${metal}`,
            `tfc:metal/unfinished_greaves/${metal}`,
            `#c:double_sheets/${metal}`
        )
        .tier(tier)
        .id(`tfc:welding/metal/greaves/${metal}_unspecialized`)
        
        event.recipes.tfc.welding(
            `tfc:metal/boots/${metal}`,
            `tfc:metal/unfinished_boots/${metal}`,
            `#c:double_sheets/${metal}`
        )
        .tier(tier)
        .id(`tfc:welding/metal/boots/${metal}_unspecialized`)
        
        event.recipes.tfc.anvil(
            `tfc:metal/shield/${metal}`,
            `tfc_items:${metal}_heavy_sheet`,
            ['upset_last','bend_any','bend_any'])
        .tier(tier)
        .id(`tfc:anvil/metal/shield/${metal}_unspecialized`)

        event.recipes.tfc.anvil(
            `tfc:metal/rod/${metal}`,
            `tfc:metal/ingot/${metal}`,
            ['hit_last','hit_any','hit_any'])
        .tier(tier)
        .id(`tfc:anvil/metal/rod/${metal}_unspecialized`)

        event.recipes.tfc.anvil(
            `tfc:metal/unfinished_lamp/${metal}`,
            `tfc:metal/sheet/${metal}`,
            ['bend_last','bend_second_last','draw_third_last'])
        .tier(tier)
        .id(`tfc:anvil/metal/unfinished_lamp/${metal}_unspecialized`)
        
        event.shaped(`tfc:metal/horse_armor/${metal}`,['   ','ABA','CCD',],{
            A: `tfc:jute_fiber`,
            B: `minecraft:leather_horse_armor`,
            C: `#c:double_sheets/${metal}`,
            D: `tfc_items:${metal}_heavy_sheet`})
        .id(`tfc:crafting/metal/horse_armor/${metal}_unspecialized`)
        
        event.shaped(`survivorsbutchercraft:metal/butcher_knife/${metal}`,['AC','BD'],{
            A: `survivorsbutchercraft:metal/butcher_knife_head/${metal}`,
            B: `#c:rods`,
            C: `tfc_items:${metal}_rivet`,
            D: `tfc:glue`})
        .id(`survivorsbutchercraft:crafting/metal/butcher_knife/${metal}_unspecialized`)

        event.shaped(`survivorsbutchercraft:metal/bonesaw/${metal}`,['AC','BD'],{
            A: `survivorsbutchercraft:metal/bonesaw_head/${metal}`,
            B: `#c:rods`,
            C: `tfc_items:${metal}_rivet`,
            D: `tfc:glue`})
        .id(`survivorsbutchercraft:crafting/metal/bonesaw/${metal}_unspecialized`)

        event.shaped(`survivorsbutchercraft:metal/gut_knife/${metal}`,['AC','BD'],{
            A: `survivorsbutchercraft:metal/gut_knife_head/${metal}`,
            B: `#c:rods`,
            C: `tfc_items:${metal}_rivet`,
            D: `tfc:glue`})
        .id(`survivorsbutchercraft:crafting/metal/gut_knife/${metal}_unspecialized`)

    })
})