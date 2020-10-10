import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { SlImg } from './components';
// import { NavLink } from 'react-router-dom';

export default class Lima extends Component {
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
					<SlImg src="./img/ideascudo/ideascudo_1.png" />
					<div class="pt-half pa3">
						<img src="./img/lima/limalogo.png" alt="img" className=" whale" />
					</div>
				</Slider>
				<div className="black optima ttu f1 fw5 tracked-tight pt2 pl2 pl1-m">
					Loghi
				</div>
			</section>
		);
	}
}
