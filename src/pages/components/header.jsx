import React from 'react';
import { NavLink } from 'react-router-dom';
import { IgB } from './components';

export const PortHead = () => (
	<header className=" z-max mt4 ph5 pb5 w-100 flex justify-between">
		<NavLink to="/" className="optima hover-gold tracked-double black fw8 f2 ">
			SCAPIN TOBIAS
		</NavLink>
		<div className="optima flex black f2 fw3 self-end">
			<IgB />
			<NavLink to="/progetti" className="ttu link silver hover-black ph3">
				progetti
			</NavLink>
			<NavLink to="/info" className="link black hover-gold ">
				INFO
			</NavLink>
			{/* <div className="optima fw4 f6 ttu dib pl3">
				<p>Ita</p>
				<p>eng</p>
			</div> */}
		</div>
	</header>
);

export const InfoHead = () => (
	<header className=" z-max mt4 ph5 pb5 w-100 flex flex-row justify-between">
		<NavLink to="/" className="optima hover-gold tracked-double black fw8 f2 ">
			SCAPIN TOBIAS
		</NavLink>
		<div className="optima flex black f2 fw3 self-end">
			<IgB />
			<NavLink to="/progetti" className="ttu link black hover-gold ph3">
				progetti
			</NavLink>
			<NavLink to="/info" className="link silver hover-black ">
				INFO
			</NavLink>

			{/* <div className="optima fw4 f6 ttu dib pl3">
				<p>Ita</p>
				<p>eng</p>
			</div> */}
		</div>
	</header>
);
