import React from 'react';
import { InfoHead } from './components/header';
import { Main } from './components/components';

const Br = () => <br></br>;

export const Info = () => (
	<main>
		<InfoHead />
		<Main>
			<section className="flex justify-between">
				<div className="w-40 h7 mr2 overflow-hidden">
					<img src="./img/02.png" alt="ritratto" className="obj-card" />
				</div>
				<div className="futura w-60 ml2">
					<p className="measure lh-copy f25 black">
						La scelta di questa professione non è stata casuale.
						<Br />
						Non saprei proprio dire quando esattamente sia successo.
						<Br />
						<Br />
						Ho preso la prima reflex in mano ormai quasi vent'anni fa, e ancora mi
						riserva molte soddisfazioni, nonostante non senta più l'odore dello
						sviluppo, o il rumore del tappo di un nuovo rullino. Credo si noti dai
						miei lavori.
						<Br />
						<Br />
						Stessa cosa vale per la matita, compagna instancabile, nonostante ora
						tutti corrano una gara di velocità, a cui non mi sento di appartenere.
						<Br />
						<Br />
						Se cercate prodotti digitali o non, con una qualità, una cura, e una
						consapevolezza quasi artigianale, per cui mezzo secolo fa siamo diventati
						famosi in tutto il mondo, siete nel posto giusto.
						<Br />
						<Br />
						<p className="pt5 measure f4 fw4 ">
							Laurea Triennale in Design della Comunicazione
							<Br />
							Laurea Magistrale in Design della Comunicazione
							<Br />
							<p className="b ttu">politecnico di milano</p>
						</p>
					</p>
					<p className="pt7 measure lh-copy f25 black">
						<span className="b">Contatti</span>
						<Br />
						<Br />
						<a
							href="mailto:info@scapintobias.xyz?subject=Primo contatto"
							className="link hover-gold black blink b"
						>
							Mail
						</a>
						<Br />
						<a href="tel:+393402100166" className="link hover-gold black">
							+39 340 210 0166
						</a>
						<Br />
						<Br />
						Portogruaro (VE)
					</p>
					<p className="pt6 measure lh-copy f25 black">Partita IVA: 04273780272</p>
				</div>
			</section>
		</Main>
	</main>
);
