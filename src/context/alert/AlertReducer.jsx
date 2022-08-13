const AlertReducer = (currState, action) => {
	switch (action.type) {
		case 'SET_ALERT':
			return action.payload;
		case 'REMOVE_ALERT':
			return null;
		default: {
			return currState;
		}
	}
};

export default AlertReducer;
