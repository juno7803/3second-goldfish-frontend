import * as htmlToImage from 'html-to-image';

export const convertHtmlToPng = async (ref: React.MutableRefObject<any>) => {
	try {
		const dataUrl = await htmlToImage.toPng(ref.current, { pixelRatio: 1 });
		const img = new Image();
		img.src = dataUrl;
		return img;
	} catch (error) {
		console.log(`error`, error);
	}
};
