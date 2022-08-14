const githubReducer = (currState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...currState,
				users: action.payload,
				loading: false,
			};
		case 'GET_USER_AND_REPOS':
			return {
				...currState,
				user: action.payload.user,
				repos: action.payload.repos,
				loading: false,
			};
		case 'SET_LOADING':
			return {
				...currState,
				loading: true,
			};
		case 'CLEAR_SEARCH_RESULTS':
			return {
				...currState,
				users: [],
			};
		default:
			return currState;
	}
};

export default githubReducer;
