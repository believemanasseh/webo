import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '@/redux/store';

interface authState {
	currentUser: {
		id?: number | null;
		email?: string | null;
	};
	login: {
		initialValue?: string;
	};
}

export const authInitialState: authState = {
	currentUser: { id: null, email: null },
	login: {
		initialValue: '',
	},
};

const slice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<object>) => {
			state.currentUser = action.payload;
		},
		setLogin: (state, action: PayloadAction<object>) => {
			state.login = action.payload;
		},
	},
});

export const { setCurrentUser, setLogin } = slice.actions;

export default slice.reducer;
