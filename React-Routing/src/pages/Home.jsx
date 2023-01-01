import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <div>
            <h1>헬스장 커뮤니티</h1>
            {/* 여러개 이용할 때는 Link를 li로 감싸주는게 좋음 */}
            <ol type='1'>
                <li><Link to = '/about'>시설관리에 조금 신경써주세요!</Link></li>
                <li><Link to = '/profile/adam'>가격이 너무 미워요ㅜㅜ</Link></li>
                <li><Link to = '/profile/jessica'>헬스장 전용 APP이 있으면 좋게었어요!!</Link></li>
                <li><Link to = '/profile/coid'>2023년 1월 이벤트는 언제 하나요?</Link></li>
                <li><Link to = '/articles'>트레이너님들 너무 친절해서 좋은거 같아요!! 항상 감사합니다~!!</Link></li>
            </ol>
        </div>
    )
}

export default Home;