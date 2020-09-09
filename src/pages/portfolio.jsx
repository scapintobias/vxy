import React from 'react';
import { PortHead } from './components/header';

import {
	Main,
	Tall,
	StaTall,
	StaLand,
	Flex,
	Link,
	Land,
	LandE,
	Spacer,
	StaLandV,
} from './components/components';

import Lima from './components/slider';

export const Portfolio = () => (
	<main>
		<PortHead />

		<Main>
			<Spacer h="h4" />
			<div className="near-black flex db w-70 w-100-m center optima f3 fw5-m f5-m lh-copy">
				<div className="mr3">
					<p>Le anatre depongono le loro uova in silenzio.</p>
					<p>Le galline invece schiamazzano come impazzite.</p>
					<p className="mt3">Qual è la conseguenza?</p>
					<p className="mb3">Tutto il mondo mangia uova di gallina.</p>
					<p className="f4 f6-m silver mr3-m">Henry Ford</p>
				</div>
			</div>
			<Spacer h="h5" />
			<Lima />
			<Spacer h="h5" />

			<Flex
				width="w-70 w-100-m"
				class="optima center flex-column-m flex-column-t justify-between bb bt pv3 b--silver"
			>
				<div className="w-40 w-90-m w-90-t  flex flex-column justify-between">
					<div class="silver f2 ttu">portraits boutique</div>
					<div className=" silver f3 f4-l f4-t f4-m lh-copy mv3 mr3">
						È un progetto di fotografia ritrattistica iniziato nel 2008, con un suo
						sito web completamente dedicato, che raccoglie la maggior parte dei miei
						scatti.
					</div>
					<Link
						to="https://portraits.boutique"
						class=" silver hover-gold f1 link dim blink mv5-t mv5-m"
					>
						Visita
					</Link>
				</div>
				<StaTall
					container="w-60 w-100-t w-100-m center-m"
					background="./img/prigioniere/poster.png"
					class="dn"
				/>
			</Flex>
			<Spacer h="h5 h3-m" />
			<Flex width="w-100" class="flex-column-m justify-center">
				<Flex width="w-45 w-100-m" class="flex-column mr3 mr0-m">
					<Tall
						to="/progetti/yape"
						container="w-70-m center-m mb4"
						article="dim ba b--silver"
						background="./img/yape.png"
						title="Yape"
						group="immagine coordinata"
					/>
					<LandE
						to="https://www.discipline.design/work/yape"
						container="w-100-m mb6-m"
						article="dim"
						background="./img/yape.jpg"
						title="Yape"
						group="interfaccia"
					/>
				</Flex>
				<Flex width="w-45 w-100-m" class="flex-column ml3 ml0-m">
					<Land
						to="/progetti/yape"
						container="w-100-m mb4"
						article="dim"
						background="./img/corte/corte.png"
						title="Corte d'Arte"
						group="immagine coordinata"
					/>

					<StaTall
						to="/progetti/yape"
						container="w-100-m mb6-m"
						article="dim"
						background="/img/corte/posters/poster.png"
						title="Corte d'Arte"
						group="poster"
					/>
				</Flex>
			</Flex>
			<Spacer h="h5 h3-m" />
			<Link to="https://youtu.be/IhxD--LuNA0" class="link dim">
				<StaLandV
					container="center w-95 w-100-m mb6-m"
					background="./img/ducati.mp4"
					title="Sempre più a contatto con la tua Ducati"
					group="video • in collaborazione con e-Novia"
				/>
			</Link>

			<Spacer h="h5 h3-m" />

			<Land
				to="/progetti/yape"
				container="w-70 center w-100-m"
				article="dim"
				background="./img/borromeo/borromeo.jpg"
				title="Borromeo 5"
				group="immagine coordinata"
			/>
			<Spacer h="h5 h3-m" />
			<Flex width="w-100" class="flex-column-m justify-center">
				<Flex width="w-45 w-100-m" class="flex-column mr3 mr0-m">
					<Land
						to="/progetti/yape"
						container="w-100-m mb4"
						article="dim  bg-light-gray"
						background="./img/manin/manin_1.png"
						title="Villa Manin"
						group="immagine coordinata"
					/>
					<Tall
						to="/progetti/yape"
						container="w-70-m center-m mb4"
						article="dim"
						background="./img/manin/manin_8.png"
						title="Villa Manin"
						group="serie di poster"
					/>
				</Flex>
				<Flex width="w-45 w-100-m" class="flex-column ml3 ml0-m">
					<StaTall
						container="w-100-m mb4"
						article="dim"
						background="/img/mourn.png"
						title="Mourn"
						group="poster"
					/>
					<StaLand
						container="w-100-m mb4"
						article="dim ba b--light-silver"
						background="./img/Timeline.png"
						title="Josef Müller Brockmann"
						group="poster • timeline"
					/>
				</Flex>
			</Flex>
			<Spacer h="h5 h3-m" />

			<LandE
				to="https://www.ideascudo.com/homepage/"
				container="w-70 mr3 w-100-m center"
				article="dim bg-light-gray"
				background="./img/ideascudo/ideascudo_1.png"
				title="Ideascudo"
				group="logo"
			/>

			<Spacer h="h4 h3-m" />
		</Main>
	</main>
);
