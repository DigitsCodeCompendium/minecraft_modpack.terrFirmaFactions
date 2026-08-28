ServerEvents.recipes(event => {
    event.recipes.tfc.welding(
        'tfc:metal/helmet/copper',
        'tfc:metal/unfinished_helmet/copper',
        'tfc:metal/double_sheet/copper'
    )
    .tier(1)
    .id('tfc:welding/metal/helmet/copper_non_specialized')
})