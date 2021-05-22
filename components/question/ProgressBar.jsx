import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { questionNumState } from '../../states';

const Root = styled.div`
	margin-top: 112px;
	width: 610px;
	height: 6px;
	background-color: black;
	border-radius: 6px;
	display: flex;
`;

const Right = styled.div`
	background: #ffaf02;
	height: 100%;
	flex: ${({ width }) => width};
`;

const Left = styled.div`
	background: #ffffff;
	height: 100%;
	flex: ${({ width }) => width};
`;

function ProgressBar() {
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);

	return (
		<Root>
			<Right width={questionNum} />
			<Left width={7 - questionNum} />
		</Root>
	);
}

export default ProgressBar;
