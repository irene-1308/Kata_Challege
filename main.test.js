import { test, expect } from 'vitest';
import { stores, toBuyList, findStoreWithAllItems } from './main.js';

//  Check to find the store that has all the items
test('finds the store with all items', () => {
    const result = findStoreWithAllItems(stores, toBuyList);
    expect(result).toEqual(`You should hurry and check Marks and Spencer`);
});

// Check if there is a store that does not has all the items from the list
test('returns a message when no store has all items', () => {
    const wrongBuyList = ['Soap', 'Pepsi', 'Garlic'];  // No store has all these items
    const result = findStoreWithAllItems(stores, wrongBuyList);
    expect(result).toEqual('Whoomp - whomp, looks like you might have to make several trips');
});

// Check if there are several stores that have all the items from you list
test('returns a message when several stores have all items', () => {
    const randomToBuyList = ['Milk', 'Lettuce', 'Pepsi'];  // Several stores have all these items
    const result = findStoreWithAllItems(stores, randomToBuyList);
    expect(result).toEqual(`You could chose to go to one of these stores: ASDA or Morrisons`);
});

