import React from 'react';
import { useRecoilState } from 'recoil';
import useInput from '../../lib/hooks/useInput';

import { allAnswerState, questionNumState } from '../../states';

interface Props {
	question: string;
	random: string[];
}
const InputQuestion = ({ question, random }: Props) => {
	const currentInputAnswer = useInput();
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState) as any;
	const [questionNum, setQuestionNum] = useRecoilState(questionNumState);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setAllAnswer([...allAnswer, { [questionNum]: currentInputAnswer.value }]);
		setQuestionNum(num => num + 1);
		currentInputAnswer.setValue('');
	};

	return (
		<div>
			<div>questionNum: {questionNum}</div>
			<div>question: {question}</div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={currentInputAnswer.value} onChange={currentInputAnswer.handler} />
			</form>
		</div>
	);
};

export default InputQuestion;
