# 🐟3Second-Goldfish-Frontend
<br/>

## 서비스명
🐠궁금붕어
<br/>
Project Period : 2021.05.22 ~ 2021.05.23
## 프로젝트 소개 
💡오늘 뭐했붕어? 삼...이...일..... 땡!!! 오늘 있었던 일 3초 안에 대답 못하면 기억 조작!
</br>
💡오늘 하루에 대한 질문이 날아오면 3초안에 대답해라! 
</br>  시간안에 잘 작성한다면 나만의 일기 완성🤩 그렇지 않다면 기억 조작 일기 탄생😥 
</br>

## 개발 담당 부분
🙌김효인
```
*메인뷰 구현
*test 결과 새 그룹 추가 page
```
🙌이정연
```
*test 질문 페이지 구현
*test 결과 공유 그리드 구현
```
🙌조윤서
```
*test 결과 페이지 구현
*test 결과 팝업 구현
```
</br>

## 프로젝트 과정
```
[1] main 페이지에서 시작 버튼과 함께 질문이 주어진다.
[2] 3초안에 답해야하며, 3초안에 답하지 못한다면 랜덤으로 답이 들어간다.
[3] 모든 질문에 답을 작성하면 나만의 일기 성공! 
[4] 결과 이미지를 저장하거나 그룹에 공유할 수 있으며 새로운 그룹도 생성 가능하다.
[5] 해당 그룹에 들어가면 공유한 그리드를 확인할 수 있다.
```

## 프로젝트 구조
```
public
 ┣ images
 ┃ ┣ MainLogo.png
 ┃ ┣ ...
 ┃ ┗ img_speechbubble.svg
 ┗ favicon.ico
src
 ┣ pages
 ┃ ┣ question
 ┃ ┃ ┣ index.tsx
 ┃ ┣ AddNewGroup.js
 ┃ ┣ _app.tsx
 ┃ ┗ result
 ┃ ┃ ┣ index.tsx
 ┃ ┣ index.js
 ┃ ┃ 
 ┣ components
 ┃ ┣ question
 ┃ ┃ ┃ WhoMeetQuestion.tsx
 ┃ ┃ ┗ InputQuestion.tsx
 ┃ ┗ Modal.jsx
 ┣ lib
 ┃ ┣ constants
 ┃ ┃ ┗ questionList.ts
 ┃ ┗ hooks
 ┃ ┃ ┗ iseInput.ts
 ┣ utils
 ┃ ┗ convertHtmlToPng.ts
 ┃  
 ┣ states
 ┗ index.ts 
 styles
 ┗ globals.css
 types
 ┗ index.ts
 

```
## 서버 연결코드
```
import { client } from './';

export const postQuestions = async body => {
	try {
		const { data } = await client.post('/question', body);
	} catch (err) {
		throw err;
	}
};

export const postGroup = async body => {
	try {
		const { data } = await client.post('/group', body);
	} catch (err) {
		throw err;
	}
};
```

```
const handleClick = async () => {
		await postQuestions({ postText: allAnswer });
	};
 ```

## 사용한 모듈
```

    "@emotion/react": "^11.4.0",
    "@emotion/styled": "^11.3.0",
    "axios": "^0.21.1",
    "next": "10.2.2",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "recoil": "^0.3.1",
    "styled-components": "^5.3.0"
  
    "@types/react": "17.0.6",
    "eslint": "^7.27.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-react": "^7.23.2",
    "eslint-plugin-react-hooks": "^4.2.0",
    "prettier": "^2.3.0",
    "typescript": "4.2.4"
 
```
## Code Convention
* Git Branch
기능별로 branch 구성

* git commit message rule
```
[feat] 기능 추가
[fix] 버그 수정
[chore] 간단한 수정
[docs] 문서
```

## 🌼프로젝트 배포 링크
https://3second-goldfish.vercel.app/
