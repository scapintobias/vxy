import React from 'react';
import { PortHead } from '../components/header';
import { Link } from 'react-router-dom';
import {
	Title,
	TwoImg,
	ParImg,
	Img,
	Br,
	ProJ,
	More,
	Biblio,
	Iltr,
	Head,
	Tit,
	P,
	Par,
} from './components.jsx';
import Vimeo from '@u-wave/react-vimeo';

export const Yape = () => (
	<main>
		<PortHead />

		<Vimeo
			video="https://vimeo.com/387650908"
			width="680px"
			responsive
			className="w-80 center ma3"
		/>

		<Img
			oneimg="https://www.startupitaliaopensummit.eu/wp-content/uploads/2019/11/Yape_logo.png"
			className="mw8 pa3"
		/>
		<Par className="mb5">
			My journey with Yape has been widely unique.
			<Br />
			I arrived at the company partly unaware of what all the startups were
			actually doing, but Yape, it caught my eye almost instantly. You cannot
			resist falling in love with it the first time you see this funny contraption
			running around the company.
			<Br />
			I wasn’t involved since the very beginning, and the first task I was given
			was the start-up’s corporate image, a work said to be ‘way overdue’ by both
			the Champion and the CDO, and, given I was the only one on the team with
			previous experience, they thought I had the chops to take it home.
			<Br />
			As I said in the{' '}
			<Link to="./enovia">
				<span className="futura fw7 f3 link hover-animate hover-green">
					e-Novia
				</span>
			</Link>{' '}
			file, soon came out I had to convince a worryingly uninterested CEO about
			what I had designed, and I took it as a personal challenge.
			<Br />
			So I followed a well defined UX process for him to discover the new corporate
			image, with the brief containing only few words:
			<Br />
			<span className="futura orange">
				“You have to design something visually powerful and intellectually elegant,
				and you have to design and give a presentation with the only purpose of him
				to like it at first glance”.
			</span>
			<Br />I started researching, as I would with an app or a website. And I soon
			found some key points where I could easily strike and win.
			<Br />
			I took in account his age, what was the design when he was our age, what were
			his personal interests, and what always put a sparkle in his eyes.
			<Br />
			He really liked technology and technology advancements, and revolution in the
			transport industry. I immediately thought I had two aces up my sleeves. So I
			went back and forth to reassure myself I was on the right path.
			<Br />
			What’s the biggest IT company ever existed, which was around when he was our
			age? IBM.
			<Br />
			What’s the company Steve Jobs built after leaving Apple in 1985? NeXT.
			<Br />
			What’s the biggest impact communication design had on transport? The MTA
			signage system in 1966 and The new AmericanAirlines corporate image in 1967.
			<Br />
			What this weird combination of events have in common? The designers.
			<Br />
			Paul Rand designed both the IBM and the NeXT logos, and Massimo Vignelli the
			signage system and the AA corporate image, and sometimes did some work for
			IBM too.
			<Br />
			When narrating the story to the CEO, I used these props to win him over, and
			I succeeded.
		</Par>
	</main>
);
