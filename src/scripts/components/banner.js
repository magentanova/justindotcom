import React, {Component} from 'react'
import {pushPageState} from '../utils.js'

class Banner extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<a id="banner" onClick={()=>pushPageState('home')}>
				<div className="img-wrapper">
					<img src="images/headshot.nobg.softbw.jpg" />
				</div>
				<div id="banner-text">
					<h1>Justin Richards</h1>
					<h2>developer | educator</h2>
				</div>
			</a>
			)
	}
}

export default Banner