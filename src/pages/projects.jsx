import React from 'react';
import { PortHead } from './components/header';
// import { Link } from 'react-router-dom';

import Vimeo from '@u-wave/react-vimeo';
import { Main, Img, Tit } from './components/components';

export const Yape = () => (
	<main>
		<PortHead />
		<Main>
			<Tit title="Yape" subtitle="Corporate Image" />
			<Vimeo video="https://vimeo.com/387650908" width="680px" responsive />
			<section className="flex">
				<Img src="../img/yape/yapetype.jpg" class="w-70 mt6" />
				<div className="w-30 mt7 futura f2 fw4">Schemi preparatori</div>
			</section>
		</Main>
	</main>
);
