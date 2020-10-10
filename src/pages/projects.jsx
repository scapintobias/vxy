import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components/slider.scss';
import { PortHead } from './components/header';
import {
	Main,
	Img,
	ProH,
	Spacer,
	SlImg,
	Flex,
	StatTall,
	StalLand,
} from './components/components';

class Peya extends Component {
	render() {
		var settings = {
			dots: false,
			fade: true,
			infinite: true,
			speed: 100,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			className: 'slides',
			arrows: false,
		};
		return (
			<section className="w-70 w-60-ns w-100-m center bg-white pa3 br4">
				<Slider {...settings} className="br3 ma2 ma1-m">
					<SlImg src="../img/yape/proposal.png" />
					<SlImg src="../img/yape/proposal1.png" />
					<SlImg src="../img/yape/proposal2.png" />
					<SlImg src="../img/yape/proposal3.png" />
					<SlImg src="../img/yape/proposal4.png" />
					<SlImg src="../img/yape/proposal5.png" />
					<SlImg src="../img/yape/proposal6.png" />
					<SlImg src="../img/yape/proposal7.png" />
					<SlImg src="../img/yape/proposal8.png" />
					<SlImg src="../img/yape/proposal9.png" />
				</Slider>
			</section>
		);
	}
}

export const Yape = () => (
	<main>
		<PortHead />
		<Main>
			<ProH title="Yape" subtitle="immagine coordinata - 2018">
				<video
					muted
					autoPlay
					src="../img/yape/yape.mp4"
					className="whale flex w-100 w-70-ns center br4"
					id="vid"
				/>
			</ProH>
			<Spacer h="h5" />
			<div className="w-70 w-60-ns w-100-m br4 center bg-white pa3">
				<div className="optima ttu f2 fw5 tracked">Keywords</div>
				<Spacer h="h3" />
				<div className="optima ttu f-6 f-5-m fw5 tracked-tight pop">POP</div>
				<div className="optima ttu f-6 f-5-m fw5 tracked-tight friendly">
					Friendly
				</div>
				<div className="optima ttu f-6 f-5-m fw5 tracked-tight original">
					Original
				</div>
				<div className="optima ttu f-6 f-5-m fw5 tracked-tight functional">
					Functional
				</div>
			</div>
			<Spacer h="h5" />
			<div className="w-60-ns w-100-m w-70 center br4 bg-white pa3">
				<Img src="../img/yape/yapetype.jpg" />
			</div>

			<Spacer h="h1" />
			<Peya />
			<Spacer h="h1" />
			<div className="w-60-ns w-100-m w-70 center br4 bg-white">
				<Img src="../img/yape.png" />
			</div>
			<Spacer h="h3" />
			<Flex width="w-100" class="flex-column-m justify-between w-60-ns center-ns">
				<Flex width="w-50 w-100-m" class="flex-column mr3 mr0-m">
					<StatTall
						container="w-70-m center-m mb4 "
						background="../img/yape/buttons.png"
					/>
					<StalLand container="w-100-m mb6-m" background="../img/yape/store.png" />
				</Flex>
				<Flex width="w-50 w-100-m" class="flex-column ml3 ml0-m">
					<StalLand
						container="w-70-m center-m mb4"
						background="../img/yape/yape.jpg"
					/>
					<StatTall container="w-100-m" background="../img/yape/storee.png" />
				</Flex>
			</Flex>
			<Spacer h="h5" />
			<div className="optima ttu f1 fw5 tracked">Design System</div>
			<Spacer h="h3" />
			<div className="w-100-m w-40 br4 bg-white pa3">
				<Img src="../img/yape/franklin.png" />
			</div>
		</Main>
	</main>
);
