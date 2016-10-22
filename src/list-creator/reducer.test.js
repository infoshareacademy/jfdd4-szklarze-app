import reducer from './reducer'
import {INCREASE_AMOUNT, DECREASE_AMOUNT, SAVE_NEW_LIST } from './actionTypes'

describe('review list creator reducer'), () => {
    it('should return the initial state'), () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            {
                itemsToBuy: [],
                shoppingLists: []
            }
        )
    }

    it('should handle INCREASE_AMOUNT'), () => {
        expect(
            reducer(
                {
                    itemsToBuy: [],
                    shoppingLists: []
                },
                {
                    type: INCREASE_AMOUNT,
                    productId: 1
                }
            ).toEqual({
                itemsToBuy: [
                    {
                        productId: 1,
                        quantity: 1
                    }
                ],
                shoppingLists: [],
            })
        )
    }
}