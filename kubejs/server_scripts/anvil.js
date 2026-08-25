ServerEvents.recipes(event => {
    event.shaped('tfc:metal/anvil/copper',[
        'ABA',
        ' B ',
        'BBB'
    ],{
        A: 'tfc:metal/triple_ingot/copper',
        B: 'tfc:metal/double_ingot/copper',
    })
    .id('tfc:crafting/metal/anvil/copper/non_specialized')
})