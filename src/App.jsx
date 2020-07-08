import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './type.css';
import './index.css';
import { Home, Portfolio } from './pages';

function PageContent() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/portfolio" exact component={Portfolio} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<div style={{ overflow: 'hidden' }}>
				<PageContent />
			</div>
		</Router>
	);
}
