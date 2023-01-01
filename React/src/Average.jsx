import React,{useState, useMemo, useCallback} from 'react';

//배열의 평균을 구해서 리턴해주는 함수
const getAverage = (numbers) =>{
    console.log("평균 계산");
    if(numbers.length ===0) return 0;
    const sum = numbers.reduce((a,b)=> a + b);
    return sum / numbers.length;
}

const Average = ()=>{
    //숫자 배열
    const [list, setList] = useState([]);
    //useMemo를 이용해서 getAverage를 호출
    //list에 변화가 생긴 경우만 메서드를 호출하고
    //그 이외의 경우는 결과를 재사용합니다.
    const avg = useMemo(()=>getAverage(list),[list])
    
    //입력받은 내용
    const [number, setNumber] = useState('');
    //input에 내용을 수정할 때 호출될 메서드
    const onChange = useCallback(e => {setNumber(e.target.value)},[]);
    //추가로 눌렀을 때 호출될 메서드
    //이 함수는 number 와 list가 변경될 때 만 다시 생성
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number,list]);

    return(
        <div>
            <input value = {number} onChange = {onChange} />
            <button onClick = {onInsert}>추가</button>
            <ul>
                {
                    list.map((value,index)=>(
                        <li key={index}>{value}</li>
                    )
                    )
                }
            </ul>
            <div>
                <b>평균:</b>{avg}
            </div>
        </div>
    )
    
}

export default React.memo(Average);

//결론 : 다시 실행을 하면 입력 도중에는 함수를 호출하지 않고 추가를 눌러서 list에 변화가 생긴 경우만 함수를 호출합니다.
//useMemo 훅을 사용했기 때문이다x.