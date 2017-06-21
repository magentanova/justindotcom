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
					<img src="images/headshot.nobg.softbw.JPG" />
				</div>
				<div id="banner-text">
					<h1>justin richards</h1>
					<h2>developer | educator</h2>
				</div>
			</a>
			)
	}
}

export default Banner