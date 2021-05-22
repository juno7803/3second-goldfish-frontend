import styled from '@emotion/styled';
import React from 'react';
import { convertHtmlToPng } from '../../lib/utils/convertHtmlToPng';

const Styled = {
	ImageWrapper: styled.div`
		box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		width: 320px;
		height: 320px;
		background-color: #fff;
		padding: 24px;
		font-size: 32px;
		color: #363636;
		& > div {
			margin-bottom: 16px;
		}
	`,
};

const resultData = {
	name: '이정연',
	date: '5월 23일',
};

function Result() {
	const [memoryImage, setMemoryImage] = React.useState<any>(undefined);
	const memoryImageRef = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		(async () => {
			const image = await convertHtmlToPng(memoryImageRef);
			setMemoryImage(image);
		})();
	}, []);

	const memoryHtml = (
		<Styled.ImageWrapper ref={memoryImageRef as React.LegacyRef<HTMLDivElement> | undefined}>
			<div>오늘 이정연은</div>
			<div>웹파트 사람들을 만나</div>
			<div>맛있는걸 먹으며</div>
			<div>솝커톤을 했다.</div>
		</Styled.ImageWrapper>
	);

	return (
		<div>
			<h1>당신의 기억을 정리해드렸어요</h1>
			{memoryHtml}
			<a href={memoryImage?.src} download={`${resultData.name}-${resultData.date}의 기억.png`}>
				이미지 다운로드
			</a>
		</div>
	);
}

export default Result;
