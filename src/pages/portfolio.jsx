import React from 'react';
import { PortHead } from './components/header';
import { Main, Place } from './components/components';
import { NavLink } from 'react-router-dom';

export const Portfolio = () => (
	<main>
		<PortHead />
		<Main>
			<NavLink to="/progetti/yape" className="mb7 w8">
				<Place
					dims="h8"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
				/>
			</NavLink>

			<Place
				dims="h8 w-100 mb7"
				title="Sempre più a contatto con la tua Ducati"
				group="video"
				anno="2018"
			/>
		</Main>
	</main>
);
