ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:dandelion', 3),
    [
      'minecraft:yellow_dye',
      '3x minecraft:ender_pearl'
    ]
  )
})



ServerEvents.recipes(event => {
  event.shaped('minecraft:acacia_boat',[
    '   ',
    'A A',
    'BBB'
  ],{
A: 'tfc:metal/ingot/blue_steel,',
B: 'minecraft:bone'})
  
})
