import React, { useEffect, useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import useInput from '../../lib/hooks/useInput';

import { allAnswerState } from '../../states';

const InputQuestion = () => {
	const currentInputAnswer = useInput();
	const [allAnswer, setAllAnswer] = useRecoilState(allAnswerState) as any;

	const submitAnswer = () => {
		const newAns = [...allAnswer, currentInputAnswer.value];
		setAllAnswer(newAns);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		submitAnswer();
		currentInputAnswer.setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={currentInputAnswer.value} onChange={currentInputAnswer.handler} />
		</form>
	);
};

export default InputQuestion;
