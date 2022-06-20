/**
 * Truthy (참 같은 값)
 */
function SomeComponent({ isShowHeader }) {
	return (
		<div>
			{isShowHeader ? <Header /> : null}
			<Body />
		</div>
	);
}

function SomeComponent({ content }) {
	return <div>{content.length > 0 ? <MessageList messages={props.messages} /> : null}</div>;
}
