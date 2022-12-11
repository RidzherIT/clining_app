import React from "react";
import { useDispatch } from "react-redux";
import { combineAction } from '../redux/actions/calculation'
interface IInputNumberProps {
    title: string;
    value: number;
}

const InputNumber: React.FC<IInputNumberProps> = function ({ title, value }) {
    const dispatch = useDispatch();
    const { increaseValue, decreaseValue } = combineAction;
    return (
        <>
            <div className="input-number">
                <span onClick={() => dispatch(decreaseValue({ title }))} className="input-number__decrease">
                    ➖
                </span>
                <span className="input-number__value">
                    {value}
                </span>
                <span onClick={() => dispatch(increaseValue({ title }))} className="input-number__increase">
                    ➕
                </span>
            </div>
        </>
    )
}

export default InputNumber;