const githubReducer = (currState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...currState,
				users: action.payload,
				loading: false,
			};
		case 'SET_LOADING':
			return {
				...currState,
				loading: true,
			};
		default:
			return currState;
	}
};

export default githubReducer;
