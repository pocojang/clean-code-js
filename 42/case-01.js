import React, { useState } from 'react';

function SomeComponent() {
	const [state, setState] = useState({
		id: '',
		password: '',
	});

	const handleChange = (e) => {
		setState({
			[e.target.name]: e.target.value,
		});
	};

	return (
		<React.Fragment>
			<input value={state.id} onChange={handleChange} name="name" />
			<input value={state.password} onChange={handleChange} name="password" />
		</React.Fragment>
	);
}

export default SomeComponent;
