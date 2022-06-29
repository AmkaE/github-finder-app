import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';

const reactAppGithubUrl = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const reactAppGithubToken = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

const UserResults = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const options = {
			headers: {
				Authorization: `token ${reactAppGithubToken}`,
			},
		};

		const res = await fetch(`${reactAppGithubUrl}/users`, options);
		const data = await res.json();
		setTimeout(() => {
			setUsers(data);
			setLoading(false);
		}, 1000);
	};

	if (!loading) {
		return (
			<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
				{users.map(user => (
					<h3 key={user.id}>{user.login}</h3>
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default UserResults;
