ServerEvents.recipes(event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.shaped(Item.of(`tfc:metal/anvil/${metal}`),[
            'ABA',
            ' B ',
            'BBB'
        ],{
            A: `tfc:metal/triple_ingot/${metal}`,
            B: `tfc:metal/double_ingot/${metal}`,
        })
        .id(`tfc:crafting/metal/anvil/${metal}/non_specialized`)
    })
})
