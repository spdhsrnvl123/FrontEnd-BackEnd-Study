# 🐳 Docker Command

docker pull -> 이미지 Download

docker images -> 이미지 List 보기

docker run httpd -> 컨테이너 생성과 동시에 컨테이너로 접속

docker run --name (ws2 이름) httpd -> 하나의 이미지에 여러개의 컨테이너를 실행할 수 있는데 이름을 정해주면 된다.

docker run --name (ws3 이름) -p 8081:80 httpd

docker ps -> 실행중인 컨테이너의 목록을 확인한다.

docker ps -a -> 이전에 종료되었던 컨테이너들을 포함한 컨테이너의 목록을 확인한다.

docker logs container Name 또는 container ID -> docker logs는 컨테이너 로그를 조회할 수 있는 명령어이다.

docker logs -f container Name 또는 container ID -> -f 옵션을 사용하면 로그를 출력하고 프로세스를 종료하는 것이 아니라 계속해서 추적한다.

docker stop container Name 또는 container ID -> 컨테이너 중지하기

docker start container Name 또는 container ID -> 중지한 컨테이너 다시 실행

docker rm container Name 또는 container ID -> 컨테이너 제거 ※ 실행중인 컨테이너는 중지해야된다.

docker rm --force container Name 또는 container ID -> 컨테이너 강제 제거

docker rmi 이미지 -> 이미지 삭제

docker exec -it container Name 또는 container ID /bin/sh -> 터미널과 컨테이너가 지속적으로 연결

exit -> 컨테이너에서 나오게 된다.(host 대상으로 변경됨)