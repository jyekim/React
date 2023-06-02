import React, { useState } from 'react';
import Test04Sub from './Test04Sub';

const Test04 = () => {

    const [color, setColor] = useState('')
    const [food, setFood] = useState('')
    
    const onColor = (e) => {
        const{ value } = e.target
        setColor(value)
    }

    const onFood = (e) => {
        const{ value } = e.target
        setFood(value)
    }
    return (
        <div style={{margin: 30 }}>
            <h2>당신이 좋아하는 색은 ?</h2>
            <div>
                <input type='text' value={ color } onChange={ onColor} />
                <p>선택: hotpink, magenta, skyblue, tomato</p>
            </div>
            <hr/>

            <h2>당신이 좋아하는 디저트는?</h2>
            <div>
                <p>
                    <input type='radio' name='food' value='마카롱' onChange={ onFood }/>
                    <label>마카롱</label>
                </p>

                <p>
                    <input type='radio' name='food' value='초콜릿' onChange={ onFood }/>
                    <label>초콜릿</label>
                </p>

                <p>
                    <input type='radio' name='food' value='케이크' onChange={ onFood }/>
                    <label>케이크</label>
                </p>

                <p>
                    <input type='radio' name='food' value='약과' onChange={ onFood }/>
                    <label>약과</label>
                </p>
            </div>
            <hr/>
            <Test04Sub color={ color } food={ food } />
        </div>
    );
};

export default Test04;