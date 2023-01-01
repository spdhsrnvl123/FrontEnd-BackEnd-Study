# SOP해결방법

## Node서버 cors 설정
=> node server에서 cors 설정
yarn add cors 또는 npm add cors 로 cors 라이브러리 설치

=>서버 실행 파일에 추가
const cors = require('cors');
app.use(cors());

## 서버를 수정할 수 없을 때 proxy 설정
=>package.json 파일에 설정을 추가
"proxy":"서버의 도메인"

요청을 할 때 /api/도메인 뒤의 url로 요청하면 됩니다.

## 라이브러리를 이용
yarn add http-poxy-middleware 로 라이브러리를 설치

src 디렉토리에 setupProxy.js 파일을 만들고 작성
```js
    const {createProxyMiddleware} = require('http-proxy-middleware');
    module.exports = (app) => {
        app.use(createProxyMiddleware('/클라이언트공통URL',{
            target:'서버의 URL',
            changeOrigin:true
        }))
    }
```
http://localhost:9000/item/itemid 에 요청
```js
    const {createProxyMiddleware} = require('http-proxy-middleware');
    module.exports = (app) => {
        app.use(createProxyMiddleware('/아무거나',{
            target:'http://localhost:9000',
            changeOrigin:true
        }))
    }
```
axios.get('/item/itemid'1)