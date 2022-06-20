const Root = () => (
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/welcome" component={Welcome} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);
