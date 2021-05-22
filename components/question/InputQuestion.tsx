import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import useInput from '../../lib/hooks/useInput';
import { useRouter } from 'next/router';

import { allAnswerState, questionNumState } from '../../states';
import ProgressBar from './ProgressBar';

const WhoMeetQuestionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;

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

const Input = styled.input`
	width: 760px;
	height: 56px;
	margin: 0 16px;
	background: #f9f9f9;
	border-radius: 20px;
	border: none;
	padding: 32px;
	font-size: 16px;
	&:focus {
		outline: none;
	}
`;

interface Props {
	question: string;
	random: string[];
}

const InputQuestion = ({ question, random }: Props) => {
	const router = useRouter();
	const currentInputAnswer = useInput();
	const [counter, setCounter] = useState(3);
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState) as any;
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setAllAnswer({ ...allAnswer, [questionNum]: currentInputAnswer.value });
		setCounter(3);
		currentInputAnswer.setValue('');
		if (questionNum === 6) router.replace('/result');
		if (questionNum !== 6) setQuestionNum(num => num + 1);
	};

	React.useEffect(() => {
		inputRef?.current?.focus();
	});

	React.useEffect(() => {
		if (counter >= 0) {
			const timer = setTimeout(() => setCounter(s => s - 1), 2000);
			return () => {
				clearTimeout(timer);
			};
		} else {
			setAllAnswer({ ...allAnswer, [questionNum]: random[Math.floor(Math.random() * random.length)] });
			if (questionNum === 6) router.replace('/result');
			if (questionNum !== 6) {
				setQuestionNum(num => num + 1);
				setCounter(3);
			}
		}
	}, [counter]);

	return (
		<WhoMeetQuestionWrapper>
			<ProgressBar />

			<div className="question__content">
				<img className="question__content--fish" src="/assets/images/img_fish_big.svg" />
				<div className="question__content--bubble">
					<img src="/assets/images/img_speechbubble.svg" />
					<div className="question__content--desc">{question}</div>
				</div>
			</div>
			<div className="button__wrapper">
				<form onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="입력 내용..."
						value={currentInputAnswer.value}
						onChange={currentInputAnswer.handler}
						ref={inputRef}
					/>
				</form>
			</div>
			<Circle>{counter}</Circle>
		</WhoMeetQuestionWrapper>
	);
};

export default InputQuestion;
