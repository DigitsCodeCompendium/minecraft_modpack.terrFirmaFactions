ServerEvents.recipes(event => {
    event.recipes.tfc.anvil(
        'create:unfinished/copper_backtank',
        'tfc:metal/double_sheet/copper',
        [
            'hit_any',
            'hit_any',
            'hit_last'
        ]
    )
    .tier(1)
})
