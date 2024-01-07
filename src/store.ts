import {create} from 'zustand';

type AuthState = {
	id: number | null;
	email: string | null;
	initialValue: string | null | undefined;
};

type State = {
	auth: AuthState;
};

type Actions = {
	setAuthState: (value: AuthState) => void;
};

const initialAuthState: AuthState = {
	id: null,
	email: null,
	initialValue: null,
};

const useStore = create<State & Actions>((set) => ({
	auth: initialAuthState,
	setAuthState: (value: AuthState) => set((_) => ({auth: value})),
}));

export default useStore;
