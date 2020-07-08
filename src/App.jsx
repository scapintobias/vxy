import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './type.css';
import './index.css';
import { Home, Portfolio, About, Contacts, Photography, Design } from './pages';

function PageContent() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/portfolio" exact component={Portfolio} />
			<Route path="/photography" exact component={Photography} />
			<Route path="/design" exact component={Design} />
			<Route path="/about" exact component={About} />
			<Route path="/contacts" exact component={Contacts} />
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
