import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <div>
            <h1>메인 페이지</h1>
            {/* 여러개 이용할 때는 Link를 li로 감싸주는게 좋음 */}
            <li><Link to = '/about'>소개</Link></li>
            <li><Link to = '/profile/adam'>아담</Link></li>
            <li><Link to = '/profile/jessica'>제시카</Link></li>
            <li><Link to = '/profile/coid'>모르는 유저</Link></li>
            <li><Link to = '/articles'>게시물</Link></li>
        </div>
    )
}

export default Home;