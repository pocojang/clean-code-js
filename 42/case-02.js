const noop = createAction('INCREMENT');

const reducer = handleActions(
	{
		[noop]: (state, action) => ({
			counter: state.counter + action.payload,
		}),
	},
	{ counter: 0 },
);
