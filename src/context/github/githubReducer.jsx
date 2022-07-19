const githubReducer = (currState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...currState,
				users: action.payload,
				loading: false,
			};
		default:
			return currState;
	}
};

export default githubReducer;
