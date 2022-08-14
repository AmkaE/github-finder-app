import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
	const intialState = null;

	const [state, dispatch] = useReducer(AlertReducer, intialState);

	// set Alert
	const setAlert = (msg, type) => {
		dispatch({
			type: 'SET_ALERT',
			payload: { msg, type },
		});

		setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert,
			}}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
