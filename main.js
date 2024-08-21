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
  
}
console.log(store);
