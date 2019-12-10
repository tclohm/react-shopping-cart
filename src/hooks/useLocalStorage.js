import { useState } from "react";

const useLocalStorage = (key, initial) => {
	const [storedValue, setStoredValue] = useState(() => {
		if(window.localStorage.getItem(key)) {
			return JSON.parse(window.localStorage.getItem(key));
		}
		return initial;
	})

	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	}

	return [storedValue, setValue];
};

export default useLocalStorage;