import { IOptionTitle } from "../reducers/calculation"

export enum calculationAction {
    INCREASE_VALUE = 'INCREASE_VALUE',
    DECREASE_VALUE = 'DECREASE_VALUE',
    RESET_VALUE = 'RESET_VALUE'
}


export const combineAction = {
    increaseValue(option: IOptionTitle) {
        return {
            type: calculationAction.INCREASE_VALUE,
            payload: option
        }
    },
    decreaseValue(option: IOptionTitle) {
        return {
            type: calculationAction.DECREASE_VALUE,
            payload: option
        }
    },
    resetValue() {
        return {
            type: calculationAction.RESET_VALUE
        }
    }
}