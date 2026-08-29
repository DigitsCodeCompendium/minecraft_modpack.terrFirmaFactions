ServerEvents.recipes(event => {
    //Stage 0: Beginner_Smith
    event.shaped('tfc:metal/pickaxe/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/pickaxe_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/pickaxe/copper_specialized')

    event.shaped('tfc:metal/propick/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/propick_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/propick/copper_specialized')

    event.shaped('tfc:metal/axe/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/axe_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/axe/copper_specialized')

    event.shaped('tfc:metal/shovel/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/shovel_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/shovel/copper_specialized')

    event.shaped('tfc:metal/hoe/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/hoe_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/hoe/copper_specialized')

    event.shaped('tfc:metal/chisel/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/chisel_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/chisel/copper_specialized')

    event.shaped('tfc:metal/hammer/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/hammer_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/hammer/copper_specialized')

    event.shaped('tfc:metal/saw/copper',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/saw_blade/copper',
        B: 'tfc_items:saw_wooden_handle',
    },)
    .id('tfc:crafting/metal/saw/copper_specialized')

    event.shaped('tfc:metal/knife/copper',[
        'A  ',
        'B  ',
    ],{
        A: 'tfc:metal/knife_blade/copper',
        B: 'tfc_items:short_wooden_handle',
    },)
    .id('tfc:crafting/metal/knife/copper_specialized')

    event.shaped('tfc:metal/scythe/copper',[
        'A  ',
        'B  ',
    ],{
        A: 'tfc:metal/scythe_blade/copper',
        B: 'tfc_items:long_stick',
    },)
    .id('tfc:crafting/metal/scythe/copper_specialized')

    event.shaped('tfc:metal/javelin/copper',[
        'A  ',
        'B  ',
    ],{
        A: 'tfc:metal/javelin_head/copper',
        B: 'tfc_items:long_stick',
    },)
    .id('tfc:crafting/metal/javelin/copper_specialized')

    event.shaped('tfc:metal/sword/copper',[
        'A',
        'B',
        'C',
    ],{
        A: 'tfc:metal/sword_blade/copper',
        B: 'tfc_metal_tools:copper_crossguard',
        C: 'tfc_items:short_wooden_handle'
    },)
    .id('tfc:crafting/metal/sword/copper_specialized')

    event.shaped('tfc:metal/mace/copper',[
        'A  ',
        'B  ',
    ],{
        A: 'tfc:metal/mace_head/copper',
        B: '#c:rods/wooden',
    },)
    .id('tfc:crafting/metal/mace/copper_specialized')

    event.shaped('tfc:metal/shears/copper',[
        ' A ',
        'BCA',
        'DB ',
    ],{
        A: 'tfc:metal/knife_blade/copper',
        B: 'tfc_items:short_wooden_handle',
        C:'#c:string',
        D:'tfc_items:saw_wooden_handle'
    },)
    .id('tfc:crafting/metal/shears/copper_specialized')

    event.shaped('tfc:metal/pickaxe/bronze',[
        'A',
        'B',
    ],{
        A: 'tfc:metal/pickaxe_head/bronze',
        B: 'minecraft:stick',
    },)
    .id('tfc:crafting/metal/pickaxe/bronze_specialized')
})