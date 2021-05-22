import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { convertHtmlToPng } from '../../lib/utils/convertHtmlToPng';
import { allAnswerState } from '../../states';

const Styled = {
	ImageWrapper: styled.div`
		width: 410px;
		height: 410px;
		background-color: #fef2e8;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		position: relative;

		& .result-content {
			display: flex;
			flex-direction: column;
			margin-top: 30px;

			&__date {
				width: 141px;
				height: 32px;
				font-weight: bold;
				font-size: 18px;
				color: #0d0c22;
				margin-bottom: 22px;
			}

			&__detail {
				font-family: 'Noto Sans KR', sans-serif;
				font-weight: 500;
				font-size: 18px;
				line-height: 178.16%;
				color: #0d0c22;
				width: 310px;
				height: 256px;
			}
		}
		img {
			position: absolute;
			right: 40px;
			bottom: 40px;
			width: 78px;
			height: 72px;
		}
	`,

	MainWrapper: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& .title {
			margin-top: 76px;
			margin-bottom: 40px;
			font-weight: 700;
			font-family: 'Noto Sans KR', sans-serif;
			font-size: 26px;
			line-height: 38px;
			color: #0d0c22;
		}
	`,

	Buttons: styled.div`
		display: flex;
		flex-direction: row;
		margin-top: 40px;
		width: 410px;
		justify-content: space-between;
		font-weight: bold;
		font-size: 18px;

		& .share-button {
			width: 187px;
			height: 62px;
			color: #fff;
			background: #ffaf02;
			border-radius: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	`,

	DownloadImgBtn: styled.a`
		width: 187px;
		height: 62px;
		background: #ffaf02;
		border-radius: 20px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
};

const resultData = {
	name: '이정연',
	date: '5월 23일',
};

function Result() {
	const [memoryImage, setMemoryImage] = React.useState<any>(undefined);
	const memoryImageRef = React.useRef<HTMLElement>(null);
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState) as any;

	React.useEffect(() => {
		(async () => {
			const image = await convertHtmlToPng(memoryImageRef);
			setMemoryImage(image);
		})();
	}, []);

	const memoryHtml = (
		<Styled.ImageWrapper ref={memoryImageRef as React.LegacyRef<HTMLDivElement> | undefined}>
			<div className="result-content">
				<div className="result-content__date">2021년 5월 23일</div>
				<div className="result-content__detail">
					<div>{`오늘 날씨는 ${allAnswer[1][1]}같아.`}</div>
					<div>{`나 ${allAnswer[0][0]}는/은 오늘 기분이 썩 유쾌하진 않아. 말해 뭐해~`}</div>
					<div>{`나의 굶주린 배를 채워준 것은 ${allAnswer[4][4]}! 이런 게 인생이지, 하하.`}</div>
					{allAnswer[2][2] === null ? (
						<div>{`아무도 안 만났고, 지금은 ${allAnswer[5][5]}에 있어.`}</div>
					) : (
						<div>{`오늘은 ${allAnswer[2][2]}을/를 만났고, 지금은 ${allAnswer[5][5]}에 있어.`}</div>
					)}
					<div>{`오늘 하루도 ${allAnswer[6][6]}.`}</div>
				</div>
			</div>
			<img src="/assets/images/SmallFish.svg" alt="" />
		</Styled.ImageWrapper>
	);

	return (
		<Styled.MainWrapper>
			<div className="title">오늘의 너는 이랬붕어!</div>
			{memoryHtml}
			<Styled.Buttons>
				<div className="share-button">그룹에 공유</div>
				<Styled.DownloadImgBtn href={memoryImage?.src} download={`${resultData.name}-${resultData.date}의 기억.png`}>
					이미지 저장
				</Styled.DownloadImgBtn>
			</Styled.Buttons>
		</Styled.MainWrapper>
	);
}

export default Result;