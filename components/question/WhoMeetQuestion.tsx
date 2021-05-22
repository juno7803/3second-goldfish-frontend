import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
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

const WhoMeetQuestion = ({ question, random }: Props) => {
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState) as any;
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);

	const handleClick = () => {};

	const passNextQuestion = () => {
		setQuestionNum(num => num + 1);
		setAllAnswer([...allAnswer, { [questionNum]: null }]);
	};

	React.useEffect(() => {
		const questionTimer = setTimeout(() => {
			setAllAnswer([...allAnswer, { [questionNum]: random[Math.floor(Math.random() * random.length)] }]);
			setQuestionNum(num => num + 1);
		}, 5500);
		return () => {
			clearTimeout(questionTimer);
		};
	}, [questionNum]);

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
				<Button onClick={handleClick}>응</Button>
				<Button onClick={passNextQuestion}>아니</Button>
			</div>
			<Circle>3</Circle>
		</WhoMeetQuestionWrapper>
	);
};

export default WhoMeetQuestion;
