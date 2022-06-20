// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");

ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode);

