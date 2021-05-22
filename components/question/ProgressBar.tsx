import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { questionNumState } from '../../states';

const Root = styled.div`
	margin-top: 112px;
	width: 610px;
	height: 6px;
	background-color: black;
	border-radius: 50px;
	display: flex;

	&:nth-of-type(1) {
		background: #ffaf02;
		height: 6px;
	}
	&:nth-of-type(2) {
		background: #ffffff;
		height: 6px;
	}
`;

function ProgressBar() {
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);

	return (
		<Root>
			<div />
			<div />
		</Root>
	);
}

export default ProgressBar;
