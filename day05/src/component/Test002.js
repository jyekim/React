import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test002 = () => {

    const [id, setId] = useState('1')
    const [dto, setDto] = useState({})
    const [search, setSearch] =useState(1)


    const onSearch = (id) =>{
        setSearch(id)
    }


    //리액트컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정할 수 있는 hook 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setDto(res.data))
    },[ id ])

    return (
        <div>
            <input type='text' value={ id } onChange={ e => setId(e.target.value)} />
            <button onClick={() => onSearch(id) }>검색</button>
            <hr/>
            <h3>{ dto.id } / { dto.title } </h3>
        </div>
    );
};

export default Test002;