import {useParams} from 'react-router-dom';

const Article = ()=>{
    const {id} = useParams();
    console.log(id);
    return(
        <div>
            <h2>게시글{id}</h2>
        </div>
    )
}

export default Article;