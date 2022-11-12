var map = new Map();
//Map은 동일한 key에 데이터를 여러번 저장하면 마지막 데이터로 수정
map.set("name","adam");
console.log(map);
map.set("name","아담");
console.log(map);
//데이터 가져오기
console.log(map.get("name"));
console.log(map.get("이름"));

//전체 데이터 순회
for(key of map.keys()){
    console.log(key);
}