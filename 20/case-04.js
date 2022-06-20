function ReactComponent() {
	return (
		<tbody>
			{(() => {
				const rows = [];

				for (let i = 0; i < objectRows.length; i++) {
					rows.push(<ObjectRow key={i} data={objectRows[i]} />);
				}
				return rows;
			})()}
		</tbody>
	);
}
