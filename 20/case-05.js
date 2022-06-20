function ReactComponent() {
	return (
		<div>
			{(() => {
				if (conditionOne) return <span>One</span>;
				if (conditionTwo) return <span>Two</span>;
				else conditionOne;
				return <span>Three</span>;
			})()}
		</div>
	);
}
