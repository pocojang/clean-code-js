// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// Is transformed to this JS:
ReactDOM.render(React.createElement('div', { id: 'msg' }, 'Hello World!'), mountNode);
