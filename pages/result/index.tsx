import React from 'react';
import { convertHtmlToPng } from '../../lib/utils/convertHtmlToPng';

function Home() {
	const [img, setImg] = React.useState<any>(undefined);

	const imageRef = React.useRef<HTMLElement>(null);
	React.useEffect(() => {
		(async () => {
			const image = await convertHtmlToPng(imageRef);
			console.log(`image`, image);
			setImg(image);
		})();
	}, []);

	return (
		<div>
			<h1>이미지 테스트</h1>
			<div style={{ border: '1px solid red' }} ref={imageRef as React.LegacyRef<HTMLDivElement> | undefined}>
				<h1>TEST</h1>
				<div>나를 이미지로 뽑아주세요</div>
			</div>
			<img src={img?.src} />
		</div>
	);
}

export default Home;
