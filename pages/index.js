import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const MainWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	.container {
		margin-top: 60px;
	}

	.main__title {
		color: black;
		font-size: 50px;
		line-height: 104px;
		font-family: 'Noto Sans KR', sans-serif;
	}

	.main__title--sub1 {
		color: #0d0c22;
		font-size: 18px;
		line-height: 26px;
		text-align: center;
		font-family: 'Noto Sans KR', sans-serif;
	}
	.main__title--sub2 {
		color: #0d0c22;
		font-size: 18px;
		line-height: 26px;
		text-align: center;
		font-family: 'Noto Sans KR', sans-serif;
	}

	.game__start {
		display: inline-block;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
		border-radius: 20px;
		background: #ffaf02;
		height: 4rem;
		font-size: 1.5rem;
		font-size: 18px;
		padding: 0 80px;
		color: white;
		margin-top: 50px;
		cursor: pointer;
		font-family: 'Noto Sans KR', sans-serif;
	}

	.footer {
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 14px;
		color: #767676;
		bottom: 0;
		width: 100%;
		margin-top: 40px;
	}
`;

function Main() {
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState);

	return (
		<MainWrap>
			<div className="header">
				<section className="container">
					<img src="/assets/images/MainLogo.png" alt="" width={200} height={200} />
					<div className="main_titles">
						<div className="main__title">오늘 뭐했붕어?</div>
						<div className="main__title--sub1">
							삼...이...일....땡!!! 오늘 있었던 일 3초 안에 대답 못하면 기억 조작!
						</div>
						<div className="main__title--sub2">내용 추가 예정!</div>
					</div>
					<Link href="/question" onClick={() => setAllAnswer([])}>
						<a className="game__start">시작하기</a>
					</Link>
				</section>
			</div>
		</MainWrap>
	);
}

export default Main;
