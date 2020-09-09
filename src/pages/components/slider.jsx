import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { SlImg } from './components';

export default class Lima extends Component {
	render() {
		var settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			className: 'slides',
		};
		return (
			<section className="w-70 w-100-m center">
				<Slider {...settings}>
					<SlImg src="./img/lima/4.png" />
					<div class="pt-half">
						<img src="./img/lima/limalogo.png" alt="img" className=" whale" />
					</div>
					<SlImg src="./img/lima/3.png" />
					<SlImg src="./img/lima/1.png" />
					<SlImg src="./img/lima/2.png" />
				</Slider>
				<div className="db mt2 mt4-m">
					<p className="optima f3 f4-m black fw5 pb2 pb1-m">Metro de Lima</p>
					<p className="optima f6 silver fw4 ttu">Segnaletica</p>
				</div>
			</section>
		);
	}
}
