import React, {Component} from 'react'

import CONTENT from '../models/content.js'
import {parseLinks} from '../utils.js'

class ProjectsPage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="projects-page">
				{CONTENT[this.props.page].projects.map(ProjectListing)}
			</div>
			)
	}
}

const ProjectListing = (props,i) => 
	<div key={props.title} className={`project project-${i % 2 ? 'right' : 'left'}-image`}>
		<div className="project-image">
			<a href={props.image.link}><img src={props.image.src} /></a>
		</div>
		<div className="project-text">
			<h3>{props.title}</h3>
			{props.subtitle.map(text => <p key={text.slice(0,19)} className="project-summary">{parseLinks(text)}</p>)}
		</div>
	</div>
	

export default ProjectsPage