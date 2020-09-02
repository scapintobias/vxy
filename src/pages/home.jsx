import React from 'react';
import { NavLink } from 'react-router-dom';
import { IgW, Main, Img, Flex } from './components/components';

export const Home = () => (
	<main>
		<div>
			<header className="absolute z-max  mt3 mt2-m ph2-m ph3 pb5 w-100 flex justify-between">
				<div className="flex flex-column-m optima tracked white fw5 f3 ">
					<p className="pr2">SCAPIN</p>
					<p>TOBIAS</p>
				</div>
				<div className="flex items-end-m flex-column-m optima white f3 fw3 ">
					<div className="flex items-end-m pb2-m flex-column-m ">
						<NavLink to="/progetti" className="ttu link white hover-gold pr3 pr0-m">
							progetti
						</NavLink>
						<NavLink to="/info" className="link white hover-gold pr3 pr0-m pb2-m">
							INFO
						</NavLink>
						<IgW />
					</div>
				</div>
			</header>
			<a href="#content" className="whale z-2">
				<div className="overlay z-2" />
				<img
					src="./img/nasa.jpg"
					alt="home"
					className=" overflow-hidden obj-cover border-box z-1"
				/>
			</a>
		</div>
		<div id="content" />

		<div className="flex db w-100 flex-column optima f3 f27-m lh-copy mb6 mt4 mh3-m">
			<div className="self-end mr3">
				<p>Le anatre depongono le loro uova in silenzio.</p>
				<p>Le galline invece schiamazzano come impazzite.</p>
				<p className="mt3">Qual è la conseguenza?</p>
				<p className="mb3">Tutto il mondo mangia uova di gallina.</p>
				<p className="tr f4 silver mr3-m">Henry Ford</p>
			</div>
		</div>
		<Main>
			<NavLink to="/progetti/yape">
				<Img src="./img/ypae.png" class="w-50 w-100-m mt4 pb3 dim" />
				<p className="optima f3 black fw5 pb2">Yape Srl</p>
				<p className="optima f5 silver fw4">Immagine coordinata, 2018</p>
			</NavLink>
			<section className="w-100 h5" />

			

			<section className="w-100 h5" />

			<NavLink to="/progetti/yape" className="db w-80 h8">
				<div className="bg-silver mb3 whale dim" />
				<p className="optima f3 black fw5 pb2">Ritratti</p>
				<p className="optima f5 silver fw4">Luci e ombre, 2008—</p>
			</NavLink>
			<section className="w-100 h7 mv4" />

	
			<section className="w-100 h5 mb2 bb" />
			<Flex width="w-60 w-100-m" class="justify-between flex-column-m optima mb4 h-auto">
				<div className="w-100-m w-50 h7 db h-auto-m mb4-m">
					<p className="f2 fw5 pb4">Design</p>
					<p className="f3 fw4 pb2">Immagine coordinata</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Marchio, logo, logotipo, manuale d'immagine coordinata
					</p>
					<p className="f3 fw4 pb2">Materiale editoriale</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Cataloghi, riviste, impaginati
					</p>
					<p className="f3 fw4 pb2">Mostre e fiere</p>
					<p className="f4 silver fw4 pb2 w-80">
						Progettazione di allestimenti e materiale promozionale
					</p>
				</div>
				<div className="w-100-m w-50 h7 h-auto-m mb4-m">
					<p className="f2 fw5 pb4">Digitale</p>
					<p className="f3 fw4 pb2">Siti web, App</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Progettazione di siti web e applicazioni, di ogni ordine di complessità
					</p>
					<p className="f3 fw4 pb2">Multimedia</p>
					<p className="f4 silver fw4 pb2 w-80 lh-copy">
						Realizzazione di video promozionali, sia in ripresa che in motion
						graphics, o la combinazione tra le due
					</p>
					<p className="f3 fw4 pb2">Fotografia</p>
					<p className="f4 silver fw4 pb2 w-80 lh-copy">
						Realizzazione di fotografia commerciale, di prodotto, di architettura,
						contenuti per siti web
					</p>
				</div>
			</Flex>
		</Main>
	</main>
);
