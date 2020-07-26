import React from 'react';
import { NavLink } from 'react-router-dom';
import { IgW, Main, Img, Footer } from './components/components';

export const Home = () => (
	<main>
		<div>
			<header className="absolute z-max mt4 ph5 pb5 w-100 flex justify-between">
				<div className="optima tracked-double white fw9 f2 ">SCAPIN TOBIAS</div>
				<div className="flex optima white f2 fw3 self-end">
					<IgW />
					<NavLink to="/progetti" className="ttu link white hover-gold ph3">
						progetti
					</NavLink>
					<NavLink to="/info" className="link white hover-gold ">
						INFO
					</NavLink>
				</div>
			</header>
			<a href="#content" className="whale z-2">
				<div className="overlay z-2" />
				<img
					src="./img/nasa.jpg"
					alt="home"
					className=" overflow-hidden obj-cover border-box z-10"
				/>
			</a>
		</div>
		<span id="content" />
		<Main>
			<div className="flex db w-100 flex-column optima f3 lh-copy mb6">
				<div className="self-end">
					<p>Le anatre depongono le loro uova in silenzio.</p>
					<p>Le galline invece schiamazzano come impazzite.</p>
					<p className="mt3">Qual è la conseguenza?</p>
					<p className="mb3">Tutto il mondo mangia uova di gallina.</p>
					<p className="tr f4 silver">Henry Ford</p>
				</div>
			</div>
			<NavLink to="/progetti/yape">
				<Img src="./img/ypae.png" class="mt4 pb3 dim">
					<p className="optima f3 black fw5 pb2">Yape Srl</p>
					<p className="optima f5 silver fw4">Immagine coordinata, 2018</p>
				</Img>
			</NavLink>
			<section className="w-100 h6" />
			<section className="db mb3 h8">
				<NavLink to="/progetti/yape" className="w-70 fr">
					<div className="flex pb3">
						<div className="bg-silver w-33 h7 hide-child overflow-hidden">
							<img
								className="child cover overflow-hidden"
								alt="img"
								src="./img/ypae.png"
							/>
						</div>
						<div className="bg-silver w-33 mh3 h7 hide-child overflow-hidden">
							<img
								className="child cover overflow-hidden"
								alt="img"
								src="./img/ypae.png"
							/>
						</div>
						<div className="bg-silver w-33 h7 hide-child overflow-hidden">
							<img
								className="child cover overflow-hidden"
								alt="img"
								src="./img/ypae.png"
							/>
						</div>
					</div>
					<p className="optima f3 black fw5 pb2">Parole Prigioniere</p>
					<p className="optima f5 silver fw4">Mostra fotografica, EXPO 2015</p>
				</NavLink>
			</section>
			<section className="w-100 h5" />

			<NavLink to="/progetti/yape" className="db w-80 h8">
				<div className="bg-silver mb3 whale dim" />
				<p className="optima f3 black fw5 pb2">Ritratti</p>
				<p className="optima f5 silver fw4">Luci e ombre, 2008—</p>
			</NavLink>
			<section className="w-100 h7 mv4" />

			<NavLink to="/progetti/yape" className="h7">
				<section className="db w-90 mb7 flex fr static">
					<div className="db w-50 mr2 ">
						<div className="bg-silver h6 mb3 dim" />
						<p className="optima f3 black fw5 pb2 dim">Parole Prigioniere</p>
						<p className="optima f5 silver fw4">Mostra fotografica, EXPO 2015</p>
					</div>
					<div className="db w-50 ml2 ">
						<div className="bg-silver h6 mb3 dim" />
						<p className="optima f3 black fw5 pb2">Parole Prigioniere</p>
						<p className="optima f5 silver fw4">Mostra fotografica, EXPO 2015</p>
					</div>
				</section>
			</NavLink>
			<section className="w-100 h4 mv4" />
		</Main>

		<Footer />
	</main>
);
