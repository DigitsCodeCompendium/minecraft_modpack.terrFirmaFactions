ServerEvents.recipes(event => {
    //copper
    event.recipes.tfc.welding(
        'tfc:metal/helmet/copper',
        'tfc:metal/unfinished_helmet/copper',
        '#c:double_sheets/copper'
    )
    .tier(1)
    .id('tfc:welding/metal/helmet/copper_unspecialized')

    event.recipes.tfc.welding(
        'tfc:metal/chestplate/copper',
        'tfc:metal/unfinished_chestplate/copper',
        'tfc_items:copper_heavy_sheet'
    )
    .tier(1)
    .id('tfc:welding/metal/chestplate/copper_unspecialized')
})