import React from 'react'
import { selectCount, changeCounterValue } from '../../../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import MainContent from './MainContent';

interface Props {}

const MainView = (props: Props): JSX.Element => {

    let value = useAppSelector(selectCount);
    let dispatch = useAppDispatch();

    let changeValue = (amount: number) => {
        dispatch(changeCounterValue(amount));
    }

    return <MainContent value={value} changeValue={changeValue}  />
}

export default MainView;

  