import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { SlImg } from './components';
import { NavLink } from 'react-router-dom';

export default class Lima extends Component {
	render() {
		var settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			className: 'slides',
			arrows: true,
		};
		return (
			<section className="w-70 w-100-m center">

					<Slider {...settings} className="bg-white br3">
						<SlImg src="./img/ideascudo/ideascudo_1.png" />
						<div class="pt-half pa3">
							<img src="./img/lima/limalogo.png" alt="img" className=" whale" />
						</div>
					</Slider>

		
			</section>
		);
	}
}
