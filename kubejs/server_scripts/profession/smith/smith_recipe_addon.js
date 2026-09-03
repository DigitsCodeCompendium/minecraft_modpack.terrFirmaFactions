//add specialized crafting recipe for smith
ServerEvents.recipes(event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.shaped(Item.of(`precisionprospecting:metal/prospector_hammer/${metal}`),[' A ','BC ','   '],
        {   A: `precisionprospecting:metal/prospector_hammer_head/${metal}`,
            B: `#c:rods`,
            C: `#c:string`,})
        .id(`precisionprospecting:crafting/metal/prospector_hammer/${metal}_specialized`)

        event.shaped(Item.of(`precisionprospecting:metal/prospector_drill/${metal}`),['BA ',' CC','   '],
        {   A: `precisionprospecting:metal/prospector_drill_head/${metal}`,
            B: `#c:string`,
            C: `#c:rods`,})
        .id(`precisionprospecting:crafting/metal/prospector_drill/${metal}_specialized`)

        event.shaped(Item.of(`precisionprospecting:metal/mineral_prospector/${metal}`),[' A ','BC ','   '],
        {   A: `precisionprospecting:metal/mineral_prospector_head/${metal}`,
            B: `#c:rods`,
            C: `#c:string`,})
        .id(`precisionprospecting:crafting/metal/mineral_prospector/${metal}_specialized`)
    })
})

ServerEvents.recipes(event => {
    const brickType = ['granite','diorite','gabbro','shale','claystone','limestone','conglomerate','dolomite','chert','chalk','tuff','rhyolite','basalt','andesite','dacite','quartzite','slate','phyllite','schist','gneiss','marble']
    brickType.forEach(type => {
        event.recipes.create.sandpaper_polishing('tfcthings:whetstone', `tfc:brick/${type}`)
        })})