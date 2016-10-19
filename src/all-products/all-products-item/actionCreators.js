import { INCREASE_AMOUNT, DECREASE_AMOUNT } from './actionTypes'

export function increaseAmount(newAmount) {
    return {
        type: INCREASE_AMOUNT,
        newAmount: newAmount
    }
}

export function decreaseAmount(newAmount) {
    return {
        type: DECREASE_AMOUNT,
        newAmount: newAmount
    }
}