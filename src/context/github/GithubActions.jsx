import axios from 'axios';
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

const githubAPI = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// get search results
export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
	});

	const res = await githubAPI.get(`/search/users?${params}`);
	return res.data.items;
};

// get user and repos
export const getUserAndRepos = async login => {
	const params = new URLSearchParams({
		sort: 'created',
		per_page: 10,
	});

	const [user, repos] = await Promise.all([
		githubAPI.get(`/users/${login}`),
		githubAPI.get(`/users/${login}/repos?${params}`),
	]);

	return { user: user.data, repos: repos.data };
};
