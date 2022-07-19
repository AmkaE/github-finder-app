import { createContext, useReducer } from 'react';
import githubReducer from './githubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubPrivider = ({ children }) => {
	const intialState = {
		users: [],
		loading: true,
	};

	const [state, dispatch] = useReducer(githubReducer, intialState);

	const fetchUsers = async () => {
		const options = {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		};

		const res = await fetch(`${GITHUB_URL}/users`, options);
		const data = await res.json();
		setTimeout(() => {
			dispatch({
				type: 'GET_USERS',
				payload: data,
			});
		}, 1000);
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				fetchUsers,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

// @Info: I was having issue using the export default,
// and I solved it by changing the file extention name from '.js' to '.jsx'
export default GithubContext;
