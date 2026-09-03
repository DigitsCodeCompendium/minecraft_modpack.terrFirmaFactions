ServerEvents.recipes(event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.shaped(Item.of(`tfcthings:rope_javelin/${metal}`),[
            'AAA',
            'ABA',
            'AAA'
        ],{
            B: `tfc:metal/javelin/${metal}`,
            A: `#c:strings`,
        })
        .id(`tfcthings:crafting/rope_javelin/${metal}`)
    })
})

ServerEvents.recipes(event =>{
    event.shaped(Item.of('tfcthings:rope_ladder',2),['BBB','A A','BBB'],{
        A:'#c:strings',
        B:'#tfc:lumber',
    }).id('tfcthings:crafting/rope_ladder') 
    event.shaped(Item.of('tfcthings:rope_bridge_bundle',2),['A A','BBB','A A'],{
        A:'#c:strings',
        B:'#tfc:lumber',
    }).id('tfcthings:crafting/rope_bridge_bundle') 
    event.shaped(Item.of('tfcthings:snare',1),['AAA','BCB','BCB'],{
        A:'#c:rods/wooden',
        B:'#tfc:lumber',
        C:'#c:strings',
    }).id('tfcthings:crafting/snare') 
    event.shaped(Item.of('tfcthings:fishing_net'),['AAA','A A','AAA'],{
        A:'#c:strings',
    }).id('tfcthings:crafting/fishing_net')
})