import React from 'react';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const Main = ({ children }) => (
	<section className="w-100 overflow-hidden ph3 ph2-m center mv4">
		{children}
	</section>
);

export const Img = (props) => (
	<div className={props.class}>
		<img src={props.src} alt="img" className="whale" />
		{props.children}
	</div>
);

export const Spacer = (props) => <div className={CN('flex w-100', props.h)} />;

export const Tit = (props) => (
	<section className="black mh3 optima absolute z-max bottom-0 mb3">
		<div className=" ttu f1 fw5 tracked-tight">{props.title}</div>
		<div className="f5 silver ttu">{props.subtitle}</div>
	</section>
);

export const ProH = (props) => (
	<section>
		<section className="vh-95">
			<div>{props.children}</div>
			<section className="absolute black optima  bottom-0 mb3">
				<div className=" ttu f1 fw5 tracked-tight">{props.title}</div>
				<div className="f5 silver ttu">{props.subtitle}</div>
			</section>
		</section>
	</section>
);

export const Place = (props) => (
	<section className={props.dims}>
		<div className="bg-silver dim whale" />
		<div className="db mt3">
			<p className="optima f3 black fw5 pb2">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</section>
);

export const PlaceT = (props) => (
	<article className={props.article}>
		<div className="aspect-ratio aspect-ratio--5x7">
			<div className="aspect-ratio--object cover">{props.children}</div>
		</div>
	</article>
);

export const BoxT = (props) => (
	<section className="bt bb b--silver pv3">{props.children}</section>
);

export const Flex = (props) => (
	<section className={CN('flex', props.class, props.width)}>
		{props.children}
	</section>
);

export const Tall = (props) => (
	<NavLink to={props.to} className={props.container}>
		<article className={props.article}>
			<div className="aspect-ratio aspect-ratio--5x7">
				<div
					className="aspect-ratio--object cover"
					style={{
						background: `url(${props.background}) no-repeat top center`,
					}}
				/>
			</div>
		</article>
		<div className="db mt2 mt1-m">
			<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</NavLink>
);

export const TallE = (props) => (
	<a
		href={props.to}
		className={props.container}
		noOpener
		noReferrer
		target="blank"
	>
		<article className={props.article}>
			<div className="aspect-ratio aspect-ratio--5x7">
				<div
					className="aspect-ratio--object cover"
					style={{
						background: `url(${props.background}) no-repeat top center`,
					}}
				/>
			</div>
		</article>
		<div className="db mt2 mt1-m">
			<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</a>
);

export const StaTall = (props) => (
	<section className={props.container}>
		<article className={props.article}>
			<div className="aspect-ratio aspect-ratio--5x7">
				<Zoom>
					<img src={props.background} className="whale" alt="img" />
				</Zoom>
			</div>
		</article>
		<div className="db mt2 mt1-m">
			<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</section>
);

export const Land = (props) => (
	<NavLink to={props.to} className={props.container}>
		<article className={props.article}>
			<div className="aspect-ratio aspect-ratio--7x5">
				<div
					className="aspect-ratio--object cover"
					style={{
						background: `url(${props.background}) no-repeat top right`,
					}}
				/>
			</div>
		</article>
		<div className="db mt2 mt1-m">
			<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</NavLink>
);

export const LandE = (props) => (
	<a
		href={props.to}
		className={props.container}
		noOpener
		noReferrer
		target="blank"
	>
		<article className={props.article}>
			<div className="aspect-ratio aspect-ratio--7x5">
				<div
					className="aspect-ratio--object cover"
					style={{
						background: `url(${props.background}) no-repeat top right`,
					}}
				/>
			</div>
		</article>
		<div className="db mt2 mt1-m">
			<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</a>
);

export const StaLand = (props) => (
	<section className={props.container}>
		<article className={props.article}>
			<div className="aspect-ratio aspect-ratio--7x5">
				<div
					className="aspect-ratio--object cover"
					style={{
						background: `url(${props.background}) no-repeat top center`,
					}}
				/>
			</div>
		</article>
		<div className="db mt2 mt1-m">
			<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
			<p className="optima f6 silver fw4 ttu">{props.group}</p>
		</div>
	</section>
);

export const StaLandV = (props) => (
	<section className="flex flex-column w-100">
		<section className={props.container}>
			<video
				src={props.background}
				autoPlay
				loop
				muted
				className="whale ba b--silver"
			/>

			<div className="db mt2 mt1-m">
				<p className="optima f3 f4-m black fw5 pb2 pb1-m">{props.title}</p>
				<p className="optima f6 silver fw4 ttu">{props.group}</p>
			</div>
		</section>
	</section>
);

export const Link = (props) => (
	<a href={props.to} noOpener noReferrer target="blank" className={props.class}>
		{props.children}
	</a>
);

export const IgW = () => (
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
);

export const IgB = () => (
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
);
