import React from 'react';
import { HomeHead } from './components/header';

export const Home = () => (
	<main>
		<div className="overlay z-2" />
		<img
			src="./img/nasa.jpg"
			alt="home"
			className="absolute dib overflow-hidden obj-cover top-0 left-0 border-box z-1"
		/>
		<HomeHead />
	</main>
);
