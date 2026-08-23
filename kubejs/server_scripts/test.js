ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:dandelion', 3),
    [
      'minecraft:yellow_dye',
      '3x minecraft:ender_pearl'
    ]
  )
})
