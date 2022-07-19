import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubPrivider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchUsers = async () => {
		const options = {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		};

		const res = await fetch(`${GITHUB_URL}/users`, options);
		const data = await res.json();
		setTimeout(() => {
			setUsers(data);
			setLoading(false);
		}, 1000);
	};

	return (
		<GithubContext.Provider
			value={{
				users,
				loading,
				fetchUsers,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

// @Info: I was having issue using the export default,
// and I solved it by changing the file extention name from '.js' to '.jsx'
export default GithubContext;
