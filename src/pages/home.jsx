import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	IgW,
	Main,
	Flex,
} from './components/components';

export const Home = () => (
	<main>
		<div>
			<header className="absolute z-max  mt3 mt2-m ph2-m ph3 pb5 w-100 flex justify-between">
				<div className="flex flex-column-m optima tracked white fw5 f3 ">
					<p className="pr2">SCAPIN</p>
					<p>TOBIAS</p>
				</div>
				<div className="flex items-end-m flex-column-m optima white f3 fw3 ">
					<div className="flex items-end-m pb2-m flex-column-m ">
						<NavLink to="/progetti" className="ttu link white hover-gold pr3 pr0-m">
							progetti
						</NavLink>
						<NavLink to="/info" className="link white hover-gold pr3 pr0-m pb2-m">
							INFO
						</NavLink>
						<IgW />
					</div>
				</div>
			</header>
		

			<div className="overlay z-5" />
			<img
				src="./img/nasa.jpg"
				alt="home"
				className=" overflow-hidden obj-cover border-box z-2"
			/>
		</div>
	

	</main>
);
