import React, {Component} from 'react'

import CONTENT from '../models/content.js'


class SkillsPage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="skills-page">
				{CONTENT[this.props.page].skillGroups.map(SkillGroup)}
			</div>
			)
	}
}

const SkillGroup = props => 
	<div key={props.heading} className="skill-group">
		<h3>{props.heading}</h3>
		{props.skills.map(Skill)}
	</div>

const Skill = props => 
	<div key={props.skill} className="skill">
		<h4>{props.skill}</h4>
		<p>{props.details}</p>
	</div>

export default SkillsPage