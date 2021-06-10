import { atom } from 'recoil';
import { IAllAnswer } from '../types';

export const allAnswerState = atom({
	key: 'allAnswerState',
	default: {} as IAllAnswer,
});

export const questionNumState = atom({
	key: 'questionNumState',
	default: 0,
});
