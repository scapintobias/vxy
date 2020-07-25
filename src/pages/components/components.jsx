import React from 'react';
import { NavLink } from 'react-router-dom';
import CN from 'classnames';
import styled from 'styled-components';

export const Wrapper = ({ children }) => (
	<section className="w-80 center mv4 flex justify-between flex-wrap ">
		{children}
	</section>
);

export const Main = ({ children }) => (
	<section className="w-80 center mv4">{children}</section>
);

export const Card = ({ back, title, subtitle, to, color }) => (
	<NavLink
		to={to}
		className="mb3 w-100-l w-100-t w-100-m w-49-ns w-32 h7 relative"
	>
		<div
			className={CN(
				'absolute hide-child flex items-center justify-center flex-column futura ttu fw7 f1 z-max card-title whale',
				color
			)}
		>
			<p>{title}</p>
			<p className="fw5 f3 child">{subtitle}</p>
		</div>
		<div className="overflow-hidden whale z-0">
			<img src={back} alt="prj" className="obj-card" />
		</div>
	</NavLink>
);

export const DoubleCard = ({ back, title, subtitle, to, color }) => (
	<NavLink
		to={to}
		className="mb3 w-100-l w-100-t w-100-m w-100-ns w-64 h7 relative"
	>
		<div
			className={CN(
				'absolute hide-child flex items-center justify-center flex-column futura ttu fw7 f1 z-max card-title whale',
				color
			)}
		>
			<p>{title}</p>
			<p className="fw5 f3 child">{subtitle}</p>
		</div>
		<div className="overflow-hidden whale z-0">
			<img src={back} alt="prj" className="obj-card" />
		</div>
	</NavLink>
);

export const TotalCard = ({ back, title, subtitle, to, color }) => (
	<NavLink to={to} className="mb3 w-100-l w-100-t w-100-m w-100 h7 relative">
		<div
			className={CN(
				'absolute hide-child flex items-center justify-center flex-column futura ttu fw7 f1 z-max card-title whale',
				color
			)}
		>
			<p>{title}</p>
			<p className="fw5 f3 child">{subtitle}</p>
		</div>
		<div className="overflow-hidden whale z-0">
			<img src={back} alt="prj" className="obj-card" />
		</div>
	</NavLink>
);

export const Bg = styled.div`
	background: ${(props) => `url(${props.background}) no-repeat top center`};
`;
