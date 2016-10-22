import reducer from './reducer'
import { SAVE_NEW_LIST } from './actionTypes'

describe('review list creator reducer'), () => {
    it('should return the initial state'), () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            {
                shoppingLists: [],
            }
        )
    }

    it('should handle SAVE_NEW_LIST'), () => {
        expect(
            reducer({
                shoppingLists: [],
            }, {
                type: SAVE_NEW_LIST
            }).toEqual({
                shoppingLists: [],
            })
        )
    }
}