import React, { useEffect, useMemo, useState } from 'react';

const user  =[
    {id: 1, name: '홍길동'},
    {id: 2, name: '김수혁'},
    {id: 3, name: 'cat'},
    {id: 4, name: 'DAUM'},
    {id: 5, name: '김수혁'},
    {id: 6, name: 'daum'},
    {id: 7, name: 'naver'},
    {id: 8, name: '김희선'},
    {id: 9, name: '서강준'},
    {id: 10, name: 'NAVER'},

]

const Test05 = () => {
    let [data, setData] = useState(user)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')


    //검색 버튼을 누르지 않고 글자가 입력될때 마다 바로바로 결과가 뜬다 
   /*
    useEffect(() => {
        //setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1))
        setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    },[text])

    */
    

    //검색 버튼 = useMemo()
    data = useMemo(() => {
        return user.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    }, [search])

    const onSearch = () =>{
        setSearch(text)
    }
  
    /*동빈이의 검색버튼 답 
    const onSearch = () => {
        setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1))
        //setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }
    */
   


    return (
        <div>
            <input type='text' value={ text } onChange={ e => setText(e.target.value) }/>
            <button onClick={ onSearch }>검색</button>
            <ul>
            {
                     data.map(item => <li key={ item.id }>
                        { item.id }: { item.name }
            </li>)
            }
            </ul>
        </div>
    );
};

export default Test05;