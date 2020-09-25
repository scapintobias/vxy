import React from 'react';
import { PortHead } from './components/header';
// import { Link } from 'react-router-dom';

import { Main, Img, ProH } from './components/components';

export const Yape = () => (
	<main>
		<PortHead />
		<Main>
			<ProH title="Yape" subtitle="immagine coordinata - 2018">
				<video
					
					autoPlay
					src="../img/yape/yape.mp4"
					className="whale flex w-100 w-70-ns center br4"
					id="vid"
				/>
			</ProH>

			<div className="flex justify-center  w-100 w-70-ns center mb7">
				<div className="bg-white br4 pa3 flex flex-column-m justify-between">
					<div className="optima  f3 fw4 ttu">Schemi preparatori</div>
					<div className="pa3 bg-agray br4 w-60">
						<Img src="../img/yape/yapetype.jpg" class="pa3 bg-white br3" />
					</div>
				</div>
			</div>
		</Main>
	</main>
);
