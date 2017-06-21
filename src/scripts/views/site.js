import React, {Component} from 'react'

import HomePage from './homePage.js'
import ProjectsPage from './projectsPage.js'
import SkillsPage from './skillsPage.js'
import Banner from '../components/banner.js'
import Footer from '../components/footer.js'
import CONTENT from '../models/content.js'
import {parseLinks} from '../utils.js'

class Site extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showing: false
		}
	}

	fadeIn() {
		this.setState({showing:false})
		setTimeout(()=>{
			this.setState({showing: true})
		},250)
	}

	componentWillMount() {
		this.fadeIn()
	}

	componentWillReceiveProps() {
		this.fadeIn()
	}

	render() {
		var comp

		switch (this.props.page ) {
			case "home": 
				comp = <HomePage {...this.props} />
				break
			case "projects-and-publications": 
				comp = <ProjectsPage {...this.props} />
				break
			case "skills": 
				comp = <SkillsPage {...this.props} />	
				break
			default: 
				comp = <HomePage {...this.props} />		
		}
		return (
			<div className={this.state.showing ? '' : 'transparent'} id="container-full">
				<Banner />
				{CONTENT[this.props.page].main.map( 
					(text,i) => <p key={text.slice(0,19)} className="main-text">{parseLinks(text)}</p>
					)}

				{comp}
				<Footer />
			</div>
			)

	}
}

export default Site