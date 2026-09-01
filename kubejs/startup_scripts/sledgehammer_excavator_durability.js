ItemEvents.modification(event => {
    const metals = [
        ['copper',2500],
        ['bronze',3250],
        ['bismuth_bronze',3000],
        ['black_bronze',3650],
        ['wrought_iron',5500],
        ['steel',8250],
        ['black_steel',10500],
        ['red_steel',16000],
        ['blue_steel',16000]]
    metals.forEach(([metal,durability]) => {
        event.modify(`tfc_hammer_time:metal/sledgehammer/${metal}`, item => {
            item.maxDamage = durability;
        })
        event.modify(`tfc_hammer_time:metal/excavator/${metal}`, item => {
            item.maxDamage = durability;
        })})})