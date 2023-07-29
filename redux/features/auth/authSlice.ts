import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
	id?: number | null;
	email?: string | null;
	initialValue?: string | null | undefined;
}

export const authInitialState: authState = {
	id: null,
	email: null,
	initialValue: null,
};

const slice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		setId: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
		},
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setInitialValue: (state, action: PayloadAction<string | undefined>) => {
			state.initialValue = action.payload;
		},
	},
});

export const { setId, setEmail, setInitialValue } = slice.actions;

export default slice.reducer;
