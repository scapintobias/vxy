import React from 'react';
import { PortHead } from './components/header';
import { Main, Place, Five7, Flex } from './components/components';
import { NavLink } from 'react-router-dom';

export const Portfolio = () => (
	<main>
		<PortHead />
		<Main>
			<NavLink to="/progetti/yape" className="ma6 center w-80">
				<Place
					dims="h8"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
				/>
			</NavLink>
			<Flex class="justify-between" width="w-100">
				<Five7
					to="/progetti/yape"
					container="w-30 mv5"
					article="dim"
					background="./img/nasa.jpg"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
				/>
				<Five7
					to="/progetti/yape"
					container="w-30 mv5"
					article="dim"
					background="./img/nasa.jpg"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
				/>
				<Five7
					to="/progetti/yape"
					container="w-30 mv5"
					article="dim"
					background="./img/nasa.jpg"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
				/>
			</Flex>
			<Place
				dims="h9 w-100 mb7"
				title="Sempre più a contatto con la tua Ducati"
				group="video"
				anno="2018"
			/>
		</Main>
	</main>
);
