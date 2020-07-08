import React from 'react';
import { PortHead } from './components/header';
import { NavLink } from 'react-router-dom';
export const Portfolio = () => (
	<main>
		<PortHead />

		<section className="flex relative w-80 center">
			<NavLink to="/photography" className="link w-50 mr2 flex vh-85 bg-black ">
				<div className="absolute tc w-50 vh-85 hover-gold pt4 items-center  futura ttu white fw7 f-4">
					photography
				</div>
				<div className="overflow-hidden flex justify-center">
					<img src="./img/dslr.jpeg" alt="photography" className="obj-cover" />
				</div>
			</NavLink>

			<NavLink to="/design" className="link w-50 ml2 flex vh-85 bg-black">
				<div className="absolute tc w-50 vh-85 hover-gold pt4 items-center  futura ttu white fw7 f-4">
					Design
				</div>
				<div className="dim overflow-hidden">
					<img src="./img/design.jpeg" alt="photography" className="obj-cover " />
				</div>
			</NavLink>
		</section>
	</main>
);

export const Photography = () => (
	<main>
		<PortHead />
	</main>
);

export const Design = () => (
	<main>
		<PortHead />
	</main>
);
