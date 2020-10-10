import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { SlImg } from './components';
// import { NavLink } from 'react-router-dom';

export default class Peya extends Component {
	render() {
		var settings = {
			dots: false,
			fade: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			className: 'slides',
			arrows: false,
		};
		return (
			<section className="w-70 w-60-ns w-100-m center bg-white pa3 br4">
				<Slider {...settings} className="bg-agray br3 ma2 ma1-m">
					<SlImg src="./img/yape/proposal.png" />
					<SlImg src="./img/yape/proposal1.png" />
					<SlImg src="./img/yape/proposal2.png" />
					<SlImg src="./img/yape/proposal3.png" />
					<SlImg src="./img/yape/proposal4.png" />
					<SlImg src="./img/yape/proposal5.png" />
					<SlImg src="./img/yape/proposal6.png" />
					<SlImg src="./img/yape/proposal7.png" />
					<SlImg src="./img/yape/proposal8.png" />
					<SlImg src="./img/yape/proposal9.png" />
				</Slider>
			</section>
		);
	}
}
