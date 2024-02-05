function woodQuantity(chairQuqntity, tableQuqntity, betQuqntity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = perChairWood * chairQuqntity;
    const tableTotalWood = perTableWood * tableQuqntity;
    const bedTotalWood = perBedWood * betQuqntity;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}
const chair = 1;
const table = 1;
const bed = 1;
const wood = woodQuantity(chair, table, bed);
console.log('Total Wood = ',wood);

