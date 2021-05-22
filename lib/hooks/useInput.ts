import { useState, useMemo } from 'react';

const useInput = () => {
	const [value, setValue] = useState<string | number>('');
	const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>): void => {
		setValue(e.target.value);
	};
	const handler = useMemo(() => handleValue, []);
	return { value, handler, setValue };
};

export default useInput;
