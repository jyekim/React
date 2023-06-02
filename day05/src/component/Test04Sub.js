import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log('getColor')

    switch(color){
        case 'hotpink':
            return '진한 분홍색'
        case 'magenta':
            return '보라색'
        case 'skyblue':
            return '하늘색'
        case 'tomato':
            return '토마토'
    }
}

const getFood = (food) => {
    console.log('getFood')

    switch(food){
        case '마카롱':
            return '간식'
        case '초콜릿':
            return '초코'
        case '케이크':
            return '케익'
        case '약과':
            return '장인약과'
    }
}


const Test04Sub = ({ color, food }) => {
    //color를 선택하건 food를 선택하던 로그가 모두 찍힌다. 
    /*
    const colorInfo = getColor(color)
    const foodInfo = getFood(food)
    */

    //=> 두개가 자꾸 동시에 console에 찍혀서 나오니 해결 방법이 필요하다
    // color를 선택하면 getColor만 찍히고, food를 선택하면 getFood만 로그가 찍히도록 한다. 부분적인 업데이트가 가능함. 
    const colorInfo = useMemo(() => {
        getColor(color)
    }, [color])
    const foodInfo = useMemo(() => {
        getFood(food)
    }, [food])


    return (
        <div>
            <h3>선택한 색 : { color }</h3>
            <h4>당신은  { colorInfo  }을 좋아하시는군요!</h4>

            <h3>선택한 음식 : { food }</h3>
            <h4>당신은  { foodInfo  }을 좋아하시는군요!</h4>
        </div>
    );
};

export default Test04Sub;