import React from 'react'
import { selectCount, increment } from '../../../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import MainContent from './MainContent';

interface Props {}

const MainView = (props: Props): JSX.Element => {

    let value = useAppSelector(selectCount);
    let dispatch = useAppDispatch();

    let incrementCounter = (amount: number) => {
        dispatch(increment(amount));
    }

    return <MainContent value={value} increment={incrementCounter}  />
}

export default MainView;

  