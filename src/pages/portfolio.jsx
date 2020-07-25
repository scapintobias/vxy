import React from 'react';
import { PortHead } from './components/header';
import { DoubleCard, Card, Wrapper, TotalCard } from './components/components';
export const Portfolio = () => (
	<main>
		<PortHead />
		<Wrapper>
			<DoubleCard
				back="./img/nasa.jpg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/slr.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/portf.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/nasa.jpg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/slr.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/portf.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/portf.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/portf.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<Card
				back="./img/portf.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<DoubleCard
				back="./img/fdslr.jpeg"
				title="astronauts"
				subtitle="Corporate Image"
				to="/"
				color="white"
			/>
			<TotalCard
				to="/"
				back="./img/aaaarchive.jpeg"
				title="archivio"
				subtitle="per chi non ha paura del passato"
				color="white"
			/>
		</Wrapper>
	</main>
);
