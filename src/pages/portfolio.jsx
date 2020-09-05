import React from 'react';
import { PortHead } from './components/header';
import {
	Main,
	Place,
	Tall,
	StaTall,
	TallE,
	StaLand,
	PlaceT,
	Flex,
	Link,
	Land,
	LandE,
	Spacer,
	BoxT,
	StaLandV,
	Img,
} from './components/components';
import { NavLink } from 'react-router-dom';

export const Portfolio = () => (
	<main>
		<PortHead />
		<Spacer h="h2" />
		<div className="ml3 ml2-m near-black flex db w-100 mt6 mt4-m optima f3 fw5-m f5-m lh-copy z-999">
			<div className="mr3">
				<p>Le anatre depongono le loro uova in silenzio.</p>
				<p>Le galline invece schiamazzano come impazzite.</p>
				<p className="mt3">Qual è la conseguenza?</p>
				<p className="mb3">Tutto il mondo mangia uova di gallina.</p>
				<p className="f4 f6-m silver mr3-m">Henry Ford</p>
			</div>
		</div>
		<Spacer h="h4" />
		<Main>
			<Land
				to="/progetti/yape"
				container="w-70 center w-100-m"
				article="dim"
				background="./img/lima/4.png"
				title="Metro de Lima"
				group="segnaletica"
			/>
			<Spacer h="h6 h3-m" />
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
			<Spacer h="h4 h3-m" />
			<Link to="https://youtu.be/IhxD--LuNA0" class="link dim">
				<StaLandV
					container="center w-95 w-100-m mb6-m"
					background="./img/ducati.mp4"
					title="Sempre più a contatto con la tua Ducati"
					group="video • in collaborazione con e-Novia"
				/>
			</Link>
			<Spacer h="h4 h3-m bb b--silver mb3" />

			<Flex width="w-100" class="optima flex-column-m justify-between">
				<div className="w-40 w-90-m  flex flex-column justify-between">
					<div class="silver f2 ttu v-top">portraits boutique</div>
					<div className=" silver f3 lh-copy">
						È un progetto di fotografia ritrattistica iniziato nel 2008, con un suo
						sito web completamente dedicato, che raccoglie la maggior parte dei miei
						scatti.
					</div>
					<Link
						to="https://portraits.boutique"
						class=" silver hover-gold f1 link dim blink"
					>
						Visita
					</Link>
				</div>
				<TallE
					to="https://www.portraits.boutique/projects/prigioniere"
					container="w-30 w-70-m center-m"
					article="dim ba b--silver"
					background="./img/prigioniere/poster.png"
					title="Parole Prigioniere"
					group="mostra fotografica"
				/>
			</Flex>

			<Spacer h="h4 h3-m bt b--silver mt3" />
			<Land
				to="/progetti/yape"
				container="w-70 center w-100-m"
				article="dim"
				background="./img/borromeo/borromeo.jpg"
				title="Borromeo 5"
				group="immagine coordinata"
			/>
			<Spacer h="h4 h3-m" />
			<Flex width="w-70" class="center">
				<Tall
					to="/progetti/yape"
					container="w-50 mr2 w-100-m"
					article="dim bg-light-gray"
					background="./img/syneco/syneco_5.png"
					title="Syneco"
					group="immagine coordinata"
				/>
				<Tall
					to="/progetti/yape"
					container="w-50 ml2 w-100-m"
					article="dim"
					background="./img/manin/manin_8.png"
					title="Villa Manin"
					group="poster"
				/>
			</Flex>
			<Spacer h="h4 h3-m" />
		</Main>
	</main>
);
