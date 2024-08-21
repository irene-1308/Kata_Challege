export const stores = {
    'ASDA': ['Milk', 'Eggs', 'Lettuce', 'Lamb', 'Basil', 'Pepsi'], 
    'Tesco': ['Broccoli', 'Mayo', 'TP', 'Chicken', 'Peaches', 'Garlic'],
    'Marks and Spencer': ['Tomatoes', 'Eggplant', 'Milk', 'Raspberries', 'Broccoli', 'Soap'],
    'Morrisons': ['Cucumbers', 'Ketchup', 'Milk', 'Cherries', 'Lettuce', 'Pepsi'],
    'Aldi': ['Cookies', 'Shampoo', 'Onions', 'Beef', 'Potatoes', 'Sprite']
};
export const toBuyList = ['Milk', 'Tomatoes', 'Broccoli'];
const store = findStoreWithAllItems(stores, toBuyList);

export function findStoreWithAllItems(stores, items) {
    const matchingStores = []; // Array to store stores that have all items (if multiple stores)

    for (const store in stores) { // Loop through each store
        const inventory = stores[store]; // Get the inventory of the store
        const rightStore = items.every(item => inventory.includes(item)); // Check if the store has all the items

        if (rightStore) { // If the store has all items, add it to the matchingStores array
            matchingStores.push(store);
        }
    }
    if (matchingStores.length === 0) { // No store has all the items
        return "Whoomp - whomp, looks like you might have to make several trips";

    } else if (matchingStores.length === 1) { // Only one store has all the items
        return `You should hurry and check ${matchingStores[0]}`;

    } else { // Multiple stores have all the items
        return `You could chose to go to one of these stores: ${matchingStores.join(' or ')}`;
    }
}
console.log(store);
