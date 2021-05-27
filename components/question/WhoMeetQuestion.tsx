import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { allAnswerState, questionNumState } from '../../states';
import { useRouter } from 'next/router';
import InputQuestion from './InputQuestion';
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

const data = {
	question: '누구를 만났어?',
	random: ['남궁선규', '권상호', '9붕어', '신기한 사람', '감사한 인연'],
};

interface Props {
	question: string;
	random: string[];
}

const WhoMeetQuestion = ({ question, random }: Props) => {
	const [show, setShow] = useState(false);
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState);
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);
	const [counter, setCounter] = useState(3);
	const router = useRouter();

	const handleClick = () => {
		setShow(true);
	};

	const passNextQuestion = () => {
		setCounter(3);
		setQuestionNum(num => num + 1);
		setAllAnswer({ ...allAnswer, [questionNum]: null });
	};

	React.useEffect(() => {
		if (counter >= 0) {
			const timer = setTimeout(() => setCounter(s => s - 1), 1000);
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
		<>
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
					<Button onClick={handleClick}>응</Button>
					<Button onClick={passNextQuestion}>아니</Button>
				</div>
				<Circle>{counter}</Circle>
			</WhoMeetQuestionWrapper>
			{show && <InputQuestion question={data.question} random={data.random} />}
		</>
	);
};

export default WhoMeetQuestion;
