import React from 'react';
import { HomeHead, BtmHead } from './components/header';

export const Home = () => (
	<main>
		<div className="overlay z-2" />

		<BtmHead />
		<HomeHead />
		<img
			src="./img/nasa.jpg"
			alt="home"
			className="absolute dib overflow-hidden obj-cover top-0 left-0 border-box z-1"
		/>
	</main>
);

