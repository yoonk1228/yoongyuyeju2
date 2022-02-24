# README!!!! 꼭 읽어주세요 안 읽으면 울거임.

## git **PUSH** 주의사항

push 시에는 본인 branch로 push해주세요!
* master로 push 금지!!!!


## git clone, pull 이후 실행방법

1. 터미널에 패키지 설치 명령어 입력
```
npm install
```
2. 작업 root영역에 .env 파일 작성 (작업 최상위디렉토리)
.env
```
PORT=
```
3. 서버 정상실행 확인
```
node server
```
node mini project 서버시작, 포트번호 : ${PORT}


## DB.sql 업데이트

1. etc 디렉토리의 sql 파일 각각 source로 실행

2. mysql 접속
```
mysql
> source ~프로젝트 경로~ /DB.sql
> source ~프로젝트 경로~ \DB.sql
```

3. local mysql에 접속해 DB확인.