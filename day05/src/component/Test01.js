import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test01 = () => {
    const [ data, setData ] = useState([])
    
    //1번 인터넷 사이트 가서 많은양의 데이터를 다 가지고 들고 오고 싶으면, 딱 한번만 가능
    /*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) //응답을 받으면 json형태로 받겠다는 것 
        .then(res => setData(res))
    }, [])
    */
    


    //2번 
    /*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data))
    }, [])
    */



    //3번 async 비동기 통신 => 요청을 하면 응답이 올 때까지 기다리지 않는다
    /*
    useEffect(() => {
        const getData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData(data)
        }

        getData()  
    }, [])
    */

    //4번 
   
    useEffect(() => {
        const getData = async() => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
        }

        getData()  
    }, [])
    



    return (
        <div>
            <ul>
            {
                data.map(item => <li key={ item.id }>
                    { item.id } / { item.title }
                </li>)
            }
            </ul>
        </div>
    );
};

export default Test01;


/*
비동기 통신 - ajax
서버에 새로고침 없이 요청할 수 있게 도와준다.
서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 도와준다.

1. jQuery - $.ajax()
2. js - fetch()
        fetch() -> json 형식으로 가져온다.
3. 설치 - axios
          axios.get() -> object 형식으로 가져온다. 

- 외부 API 비동기 통신을 위해서 fetch()를 이용한다.
- fetch()에 API 경로를 적어주면 promise가 반환된다.
fetch( url, [options] )

fetch(url)
.then(콜백) - 응답 성공
.catch(콜백) - 응답 실패

axios.get(url)
     .then(콜백) - 응답 성공
     .catch(콜백) - 응답 실패

npm install axios / yarn add axios
*/