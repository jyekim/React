import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { red, green, blue, tomato } from '../../store/modules/color.js'

const Color = () => {
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{ color: color }}>컬러 : { color }</h1>
            <p>
                <button onClick={ () => dispatch(red()) }>RED</button>
                <button onClick={ () => dispatch(blue())}>BLUE</button>
                <button onClick={ () => dispatch(green())}>GREEN</button>
                <button onClick={ () => dispatch(tomato())}>TOMATO</button>
            </p>
        </div>
    );
};

export default Color;