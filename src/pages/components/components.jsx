import React from 'react';
import CN from 'classnames';

export const Wrapper = ({ children }) => (
	<section className="flex ph5 flex-wrap ">{children}</section>
);

export const Main = ({ children }) => (
	<section className="w-100 ph5 center mt4 mb4">{children}</section>
);

export const Img = (props) => (
	<section className="dib">
		<img src={props.src} alt="img" className={CN(props.class)} />
		<div>{props.children}</div>
	</section>
);

export const Tit = (props) => (
	<section className="mv4 bt pt3">
		<div className="futura ttu f1 fw7">{props.title}</div>
		<div className="bodoni pt2 f2">{props.subtitle}</div>
	</section>
);

export const Flex = ({ children }, props) => (
	<section className={('flex', props.class)}>{children}</section>
);

export const IgW = () => (
	<a
		href="https://www.instagram.com/discipline.design"
		target="_blank"
		rel="noopener noreferrer"
		className="dib"
	>
		<svg x="0px" y="0px" width="25px" height="25px" id="insta">
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
);

export const IgB = () => (
	<a
		href="https://www.instagram.com/discipline.design"
		target="_blank"
		rel="noopener noreferrer"
		className="dib"
	>
		<svg x="0px" y="0px" width="25px" height="25px" id="insta">
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
);

export const Footer = () => (
	<section className="optima silver mh2 mv3 h1 flex justify-between flex-row w-100">
		<div className="">© 2020 Tobias Scapin</div>
		<div className="">Via Pastrengo 4 — 30026 Portogruaro (VE)</div>
		<div className="mr3">+39 3402100166 — info@scapintobias.xyz</div>
	</section>
);
