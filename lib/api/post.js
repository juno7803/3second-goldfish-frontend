import { client } from './';

export const postQuestions = async body => {
	try {
		const { data } = await client.post('/question', body);
	} catch (err) {
		throw err;
	}
};

export const postGroup = async body => {
	try {
		const { data } = await client.post('/group', body);
	} catch (err) {
		throw err;
	}
};
