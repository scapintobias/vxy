import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './type.css';
import './index.css';
import { Home, Portfolio, Info, Yape } from './pages';

function PageContent() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/portfolio" exact component={Portfolio} />
			<Route path="/portfolio/yape" exact component={Yape} />
			<Route path="/info" exact component={Info} />
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
