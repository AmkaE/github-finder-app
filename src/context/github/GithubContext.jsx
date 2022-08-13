import { createContext, useReducer } from 'react';
import githubReducer from './githubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubPrivider = ({ children }) => {
	const intialState = {
		users: [],
		user: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, intialState);

	// get search results
	const searchUsers = async text => {
		setLoading();

		const params = new URLSearchParams({
			q: text,
		});

		const options = {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		};

		const res = await fetch(`${GITHUB_URL}/search/users?${params}`, options);
		const { items } = await res.json();
		setTimeout(() => {
			dispatch({
				type: 'GET_USERS',
				payload: items,
			});
		}, 500);
	};

	// get single user
	const getUser = async login => {
		setLoading();

		const options = {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		};

		const res = await fetch(`${GITHUB_URL}/users/${login}`, options);

		if (res.status === 404) {
			window.location = '/notfound';
		} else {
			const date = await res.json();

			setTimeout(() => {
				dispatch({
					type: 'GET_USER',
					payload: date,
				});
			}, 500);
		}
	};

	// clear users from state
	const clearSearchResults = () => dispatch({ type: 'CLEAR_SEARCH_RESULTS' });

	const setLoading = () => dispatch({ type: 'SET_LOADING' });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUsers,
				clearSearchResults,
				getUser,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

// @Info: I was having issue using the export default,
// and I solved it by changing the file extention name from '.js' to '.jsx'
export default GithubContext;
