ServerEvents.recipes(event => {
    event.recipes.tfc.anvil(
        'create:unfinished/copper_backtank',
        'tfc:metal/double_sheet/copper',
        [
            'hit_last',
            'hit_any',
            'hit_any'
        ]
    )
    .tier(1)
    .id('tfc:anvil/metal/unfinished_backtank/copper')
})
