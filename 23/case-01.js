function fetchData() {
	if (state.data) {
		return state.data;
	} else {
		return 'Fetching...';
	}
}
