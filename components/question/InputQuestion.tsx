import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import useInput from '../../lib/hooks/useInput';
import { useRouter } from 'next/router';

import { allAnswerState, questionNumState } from '../../states';

const WhoMeetQuestionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	.progress-bar {
		margin-top: 112px;
		width: 610px;
		height: 6px;
		background-color: black;
	}
	.question {
		&__content {
			margin-top: 61px;
			display: flex;
			align-items: center;
			&--bubble {
				position: relative;
			}
			&--desc {
				position: absolute;
				top: 54px;
				left: 120px;
				font-weight: 500;
				font-size: 24px;
				line-height: 34.75px;
			}
		}
	}
	.button__wrapper {
		margin-top: 40px;
		display: flex;
	}
`;

const Button = styled.div`
	&:nth-of-type(2) {
		margin-left: 35px;
	}
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 187px;
	height: 62px;
	border-radius: 20px;
	background-color: #efefef;
	font-weight: 700;
	font-size: 18px;
	&:active {
		box-shadow: inset 0px 4px 14px rgba(0, 0, 0, 0.1);
	}
`;

const Circle = styled.div`
	margin-top: 39px;
	width: 142px;
	height: 142px;
	background-color: #ffaf02;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 96px;
	font-weight: 500;
`;
interface Props {
	question: string;
	random: string[];
}
const InputQuestion = ({ question, random }: Props) => {
	const router = useRouter();
	const currentInputAnswer = useInput();
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState) as any;
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setAllAnswer([...allAnswer, { [questionNum]: currentInputAnswer.value }]);
		currentInputAnswer.setValue('');
		if (questionNum === 6) router.replace('/result');
		if (questionNum !== 6) setQuestionNum(num => num + 1);
	};

	return (
		<WhoMeetQuestionWrapper>
			<div className="progress-bar"></div>
			<div className="question__content">
				<img className="question__content--fish" src="/assets/images/img_fish_big.svg" />
				<div className="question__content--bubble">
					<img src="/assets/images/img_speechbubble.svg" />
					<div className="question__content--desc">{question}</div>
				</div>
			</div>
			<div className="button__wrapper">
				<form onSubmit={handleSubmit}>
					<input type="text" value={currentInputAnswer.value} onChange={currentInputAnswer.handler} />
				</form>
			</div>
			<Circle>3</Circle>
		</WhoMeetQuestionWrapper>
	);
};

export default InputQuestion;
