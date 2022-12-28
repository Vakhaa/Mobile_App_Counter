import React from 'react'
import {
    selectCount,
    selectButtonLongPressValue,
    changeCounterValueAction,
    changeLongPressValueAction,
    unpressButtonAction
} from '../../../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import MainContent from './MainContent';

interface Props { }

const MainView = (props: Props): JSX.Element => {

    let value = useAppSelector(selectCount);
    let longPressValue = useAppSelector(selectButtonLongPressValue);

    let dispatch = useAppDispatch();

    let changeCounterValue = (amount: number) => {
        dispatch(changeCounterValueAction(amount));
    }

    let changeLongPressValue = (amount: number) => {
        dispatch(changeLongPressValueAction(amount));
    }

    let onPressOut = () => {
        dispatch(changeCounterValueAction(longPressValue));
        dispatch(unpressButtonAction());
    }

    return (<MainContent value={value}
        longPressValue={longPressValue}
        changeValue={changeCounterValue}
        changeLongPressValue={changeLongPressValue}
        onPressOut={onPressOut} />)
}

export default MainView;

