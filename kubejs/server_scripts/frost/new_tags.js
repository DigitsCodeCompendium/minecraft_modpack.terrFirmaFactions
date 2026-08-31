ServerEvents.tags('item', event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.add('c:triple_ingots', `tfc:metal/triple_ingot/${metal}`)
        event.add(`c:triple_ingots/${metal}`, `tfc:metal/triple_ingot/${metal}`)
        });
    })