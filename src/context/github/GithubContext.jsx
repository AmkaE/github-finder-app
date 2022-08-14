import { createContext, useReducer } from 'react';
import githubReducer from './githubReducer';

const GithubContext = createContext();

export const GithubPrivider = ({ children }) => {
	const intialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, intialState);

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

// @Info: I was having issue using the export default,
// and I solved it by changing the file extention name from '.js' to '.jsx'
export default GithubContext;
