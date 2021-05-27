import { atom } from 'recoil';

export interface IAllAnswer {
	0: string;
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	6: string;
}
export const allAnswerState = atom({
	key: 'allAnswerState',
	default: {} as IAllAnswer,
});

export const questionNumState = atom({
	key: 'questionNumState',
	default: 0,
});
