import { calculationAction } from "../actions/calculation";
export interface IOptionTitle {
    title: string;
}
interface IOption {
    title: string;
    sale: number;
    value: number;
    currentSale: number;
}
interface IState {
    options: Array<IOption>;
    totalSale: number;
}
interface IAction {
    type: calculationAction;
    payload: IOptionTitle;
}
const initialState: IState = {
    options: [
        {
            title: 'Количество санузлов',
            sale: 300,
            value: 1,
            currentSale: 300
        },
        {
            title: 'Мойка окон',
            sale: 250,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Мойка лоджии',
            sale: 2000,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Химчистка дивана',
            sale: 1000,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Химчистка кресел',
            sale: 500,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Химчистка стульев',
            sale: 100,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Химчистка матраса 1 мест',
            sale: 1000,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Химчистка матраса 1.5 мест',
            sale: 1400,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Химчистка матраса 2 мест',
            sale: 1800,
            value: 0,
            currentSale: 0
        },
        {
            title: 'Удаление запаха',
            sale: 400,
            value: 0,
            currentSale: 0
        },
    ],
    totalSale: 300
}

const updateOptions = function (state: IState, value: number, sale: number, action: IAction): Array<IOption> {
    return state.options.map(option =>
        option.title == action.payload.title
            ?
            { ...option, value: value, currentSale: sale }
            :
            option
    );
}

export const calculationReducer = function (state = initialState, action: IAction): IState {
    const elem = state.options.find(elem => elem.title == action.payload?.title);
    let elemValue = elem?.value;
    let elemCurrentSale = elem?.sale;
    let stateTotalSale = state.totalSale;
    switch (action.type) {
        case calculationAction.INCREASE_VALUE:
            if (elemValue !== undefined) elemValue = ++elemValue;
            if (elemCurrentSale !== undefined && elemValue !== undefined) elemCurrentSale = elemCurrentSale * elemValue;
            if (elem !== undefined) stateTotalSale += elem.sale;
            return {
                ...state,
                totalSale: stateTotalSale,
                options: updateOptions(state, elemValue as number, elemCurrentSale as number, action)
            }
        case calculationAction.DECREASE_VALUE:
            if (elem && elemCurrentSale !== undefined && elemValue != undefined && elemValue - 1 != -1 && elem.title != 'Количество санузлов') {
                elemValue = --elemValue;
                elemCurrentSale = elemCurrentSale * elemValue;
                stateTotalSale -= elem.sale;
            }
            if (elem && elemCurrentSale !== undefined && elemValue != undefined && elem.title == 'Количество санузлов' && elem.value - 1 != 0) {
                elemValue = --elemValue;
                elemCurrentSale = elemCurrentSale * elemValue;
                stateTotalSale -= elem.sale;
            }
            return {
                ...state,
                totalSale: stateTotalSale,
                options: updateOptions(state, elemValue as number, elemCurrentSale as number, action)
            }
        case calculationAction.RESET_VALUE:
            const options = state.options.map(elem => elem.title == 'Количество санузлов' ? { ...elem, value: 1, sale: 300, currentSale: 300 } : { ...elem, value: 0, currentSale: 0 });
            return {
                ...state,
                totalSale: 300,
                options: options
            }
            break;
        default:
            return state;
    }
}