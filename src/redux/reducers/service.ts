import serviceImg1 from '../../images/services/1.png';
import serviceImg2 from '../../images/services/2.png';
import serviceImg3 from '../../images/services/3.png';
import serviceImg4 from '../../images/services/4.png';
import serviceImg5 from '../../images/services/5.png';
import serviceImg6 from '../../images/services/6.png';
interface IStateItem {
    img: string;
    service: string;
    subService: Array<string>
}

const initialState: Array<IStateItem> = [
    {
        img: serviceImg1,
        service: 'Уборка квартир',
        subService: ['Профессиональная уборка квартир', 'Генеральная уборка квартиры', 'Уборка квартиры после ремонта']
    },
    {
        img: serviceImg2,
        service: 'Уборка коттеджей',
        subService: ['Уборка коттеджей и частных домов', 'Генеральная уборка коттеджей', 'Уборка коттеджей после ремонта']
    },
    {
        img: serviceImg3,
        service: 'Уборка офисов',
        subService: ['Профессиональная уборка офисов', 'Генеральная уборка офисов', 'Уборка офисов после ремонта',]
    },
    {
        img: serviceImg4,
        service: 'Химчистка',
        subService: ['Химчистка ковров на дому', 'Химчистка ковров с вывозом в цех', 'Химчистка мягкой мебели', 'Химчистка матрасов на дому']
    },
    {
        img: serviceImg5,
        service: 'Чистка бассейнов',
        subService: ['Профессиональная чистка бассейнов', 'Чистка душевых кабин', 'Чистка сауны, хамам, бани', 'Экологическая уборка']
    },
    {
        img: serviceImg6,
        service: 'Мойка фасадов',
        subService: ['Чистка кондиционеров', 'Озонирование и Дезинфекция', 'Размывка пола после ремонта', 'Мытье окон, витрин, фасадов']
    },
]

export const serviceReducer = (state = initialState, action: any): Array<IStateItem> => {
    switch (action.type) {
        default:
            return state;
    }
}