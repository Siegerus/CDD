const AUTH_TOKEN_KEY_NAME = 'this is token-name';

const getToken = () => {
	const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
	return token ?? '';
};

const setToken = (token: string) => {
	localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const dropToken = () => {
	localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
export { getToken, setToken, dropToken };
