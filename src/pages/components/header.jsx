import React from 'react';
import { NavLink } from 'react-router-dom';

export const HomeHead = () => (
	<section className="absolute z-max bottom-0 ph5 pb5 w-100 flex justify-between">
		<div className="futura tracked-double white fw7 f15 ">SCAPIN TOBIAS</div>
		<div className="futura white f3 fw5 self-end">
			<a
				href="https://www.instagram.com/discipline.design"
				target="_blank"
				rel="noopener noreferrer"
				className="dib"
			>
				<svg x="0px" y="0px" width="22px" height="22px" id="insta">
					<path
						id="instagram"
						fill="#ffff"
						d="M14,0H6C2.7,0,0,2.7,0,6V14c0,3.3,2.7,6,6,6H14c3.3,0,6-2.7,6-6V6C20,2.7,17.3,0,14,0z M18,14c0,2.2-1.8,3.9-3.9,3.9H6
		C3.8,18,2,16.2,2,14V6C2,3.8,3.8,2,6,2H14C16.2,2,18,3.8,18,6V14L18,14z"
					/>
					<path
						id="instagram"
						fill="#ffff"
						d="M10,4.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S12.9,4.8,10,4.8z M10,13.2c-1.7,0-3.2-1.4-3.2-3.2
		S8.3,6.8,10,6.8c1.7,0,3.2,1.4,3.2,3.2C13.2,11.7,11.7,13.2,10,13.2z"
					/>
					<circle id="instagram" fill="#ffff" cx="15.2" cy="4.9" r="1.2" />
				</svg>
			</a>

			<NavLink to="/portfolio" className="link white hover-gold ph3">
				PORTFOLIO
			</NavLink>
			<NavLink to="/info" className="link white hover-gold ">
				INFO
			</NavLink>
		</div>
	</section>
);

export const BtmHead = () => (
	<section className="absolute z-max top-0 ph5 pt5 w-100 flex justify-between">
		<div className="futura ttu white fw7 f15 ">
			Design
			<div className="pt6 futura fw4 white f1 ttu">
				<p>Siti web</p>
				<p>applicazioni</p>
				<p className="pt5">branding</p>
				<p>editoria</p>
			</div>
		</div>
		<div className="futura ttu white f15 fw7 self-end tr">
			fotografia
			<div className="pt6 futura fw4 white f1 ttu">
				<p>Ritratto</p>
				<p>Prodotto</p>
				<p>Architettura</p>
				<p className="pt5">video</p>
			</div>
		</div>
	</section>
);

export const PortHead = () => (
	<section className="w-80 center">
		<section className="dib z-max pt4  flex justify-between">
			<NavLink
				to="/"
				className="link futura black tracked-double hover-gold fw7 f15 z-max"
			>
				SCAPIN TOBIAS
			</NavLink>
			<div className="futura black f3 fw5 self-end">
				<a
					href="https://www.instagram.com/discipline.design"
					target="_blank"
					rel="noopener noreferrer"
					className="dib"
				>
					<svg x="0px" y="0px" width="22px" height="22px" id="insta">
						<path
							id="instagram"
							fill="#000"
							d="M14,0H6C2.7,0,0,2.7,0,6V14c0,3.3,2.7,6,6,6H14c3.3,0,6-2.7,6-6V6C20,2.7,17.3,0,14,0z M18,14c0,2.2-1.8,3.9-3.9,3.9H6
		C3.8,18,2,16.2,2,14V6C2,3.8,3.8,2,6,2H14C16.2,2,18,3.8,18,6V14L18,14z"
						/>
						<path
							id="instagram"
							fill="#000"
							d="M10,4.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S12.9,4.8,10,4.8z M10,13.2c-1.7,0-3.2-1.4-3.2-3.2
		S8.3,6.8,10,6.8c1.7,0,3.2,1.4,3.2,3.2C13.2,11.7,11.7,13.2,10,13.2z"
						/>
						<circle id="instagram" fill="#000" cx="15.2" cy="4.9" r="1.2" />
					</svg>
				</a>

				<NavLink to="/portfolio" className="link black hover-black ph3">
					PORTFOLIO
				</NavLink>
				<NavLink to="/info" className="link silver hover-gold">
					INFO
				</NavLink>
			</div>
		</section>
		<div className="z-2  h2 flex w-100">
			<p className="dib self-end futura ttu silver fw5">designer — fotografo</p>
		</div>
	</section>
);

export const InfoHead = () => (
	<section className="w-80 center">
		<section className="dib z-max pt4 w-100 flex justify-between">
			<NavLink
				to="/"
				className="link futura black tracked-double hover-gold fw7 f15 z-max"
			>
				SCAPIN TOBIAS
			</NavLink>
			<div className="futura black f3 fw5 self-end">
				<a
					href="https://www.instagram.com/discipline.design"
					target="_blank"
					rel="noopener noreferrer"
					className="dib"
				>
					<svg x="0px" y="0px" width="22px" height="22px" id="insta">
						<path
							id="instagram"
							fill="#000"
							d="M14,0H6C2.7,0,0,2.7,0,6V14c0,3.3,2.7,6,6,6H14c3.3,0,6-2.7,6-6V6C20,2.7,17.3,0,14,0z M18,14c0,2.2-1.8,3.9-3.9,3.9H6
		C3.8,18,2,16.2,2,14V6C2,3.8,3.8,2,6,2H14C16.2,2,18,3.8,18,6V14L18,14z"
						/>
						<path
							id="instagram"
							fill="#000"
							d="M10,4.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S12.9,4.8,10,4.8z M10,13.2c-1.7,0-3.2-1.4-3.2-3.2
		S8.3,6.8,10,6.8c1.7,0,3.2,1.4,3.2,3.2C13.2,11.7,11.7,13.2,10,13.2z"
						/>
						<circle id="instagram" fill="#000" cx="15.2" cy="4.9" r="1.2" />
					</svg>
				</a>

				<NavLink to="/portfolio" className="link silver hover-black ph3">
					PORTFOLIO
				</NavLink>
				<NavLink to="/info" className="link black hover-black">
					INFO
				</NavLink>
			</div>
		</section>
		<div className="z-2 h2 flex w-100">
			<p className="dib self-end futura ttu silver fw5">designer — fotografo</p>
		</div>
	</section>
);

export const ContHead = () => (
	<section className="w-80 center">
		<section className="dib z-max pt4 w-100 flex justify-between">
			<NavLink
				to="/"
				className="link futura black tracked-double hover-gold fw7 f15 z-max"
			>
				SCAPIN TOBIASS
			</NavLink>
			<div className="futura black f3 fw5 self-end">
				<a
					href="https://www.instagram.com/discipline.design"
					target="_blank"
					rel="noopener noreferrer"
					className="dib"
				>
					<svg x="0px" y="0px" width="22px" height="22px" id="insta">
						<path
							id="instagram"
							fill="#000"
							d="M14,0H6C2.7,0,0,2.7,0,6V14c0,3.3,2.7,6,6,6H14c3.3,0,6-2.7,6-6V6C20,2.7,17.3,0,14,0z M18,14c0,2.2-1.8,3.9-3.9,3.9H6
		C3.8,18,2,16.2,2,14V6C2,3.8,3.8,2,6,2H14C16.2,2,18,3.8,18,6V14L18,14z"
						/>
						<path
							id="instagram"
							fill="#000"
							d="M10,4.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S12.9,4.8,10,4.8z M10,13.2c-1.7,0-3.2-1.4-3.2-3.2
		S8.3,6.8,10,6.8c1.7,0,3.2,1.4,3.2,3.2C13.2,11.7,11.7,13.2,10,13.2z"
						/>
						<circle id="instagram" fill="#000" cx="15.2" cy="4.9" r="1.2" />
					</svg>
				</a>
				<NavLink to="/portfolio" className="link silver hover-gold ph3">
					PORTFOLIO
				</NavLink>
				<NavLink to="/about" className="link silver hover-gold pr3">
					ABOUT
				</NavLink>
				<NavLink to="/contacts" className="link black hover-black ">
					CONTACTS
				</NavLink>
			</div>
		</section>
		<div className="z-2 h2 flex w-100">
			<p className="dib self-end futura ttu silver fw5">designer — fotografo</p>
		</div>
	</section>
);
