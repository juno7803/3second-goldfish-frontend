import { atom } from 'recoil';

export const allAnswerState = atom({
	key: 'allAnswerState',
	default: [],
});

export const questionNumState = atom({
	key: 'questionNumState',
	default: 0,
});
