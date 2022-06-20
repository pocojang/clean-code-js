import Vuex from 'vuex';
import { SOME_MUTATION } from './mutation-types';

export const SOME_MUTATION = 'SOME_MUTATION';

const store = new Vuex.Store({
	state: {
		// some code...
	},
	mutations: {
		[SOME_MUTATION](state) {},
	},
});
