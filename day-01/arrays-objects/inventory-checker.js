function inventoryChecker(inventory, item) {
    let quantity = inventory[item.itemName];
    if (quantity > 5) {
        return 'plenty of ' + item.itemName;
    } else {
        return 'running low on ' + item.itemName;
    }
}

console.log(inventoryChecker({beans: 3, egg: 6}, {itemName: 'egg'}))
console.log(inventoryChecker({beans: 3, egg: 6}, {itemName: 'beans'}))