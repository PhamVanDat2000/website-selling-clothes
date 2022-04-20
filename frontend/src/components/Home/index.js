import React from 'react';
import { useStyles } from './styles';
import SLIDE_1 from "../../asserts/img/slide_1.jpg"
import ShopFilters from './Components/ShopFilters';
import Header from '../contain/Header/index';
import Footer from '../contain/Footer/index';

export default function Home() {
	
	const classes = useStyles()
	return (
		<div>

			<Header className={classes.header}/>
			<img className={classes.slideImg} src={SLIDE_1} alt="slide image" />
			<ShopFilters />
			<Footer />
		</div>
	);
}
