import {PAGE_NAMES} from '../utils.js'

const CONTENT = {}

CONTENT[PAGE_NAMES.home] = {
		main: ["I'm a technologist, an educator, and a writer. I'm always looking to take on new projects and deepen my skills.",
				"When it comes to tech, my areas of expertise are natural language processing, machine learning, and full-stack web development. I also have years of experience as a teacher, including three years spent training software developers. Further back, I was trained as a journalist and worked as a reporter for several magazines and newsweeklies.",
				`For a closer look, check out my <a href='${PAGE_NAMES.projects}'>projects & publications</a>, my <a href='${PAGE_NAMES.skills}'>skills page</a>, and my profiles on the sites below. Click the mail button to contact me directly.`]
	}

CONTENT[PAGE_NAMES.projects] = {
		main: ['projects & publications']
	}

CONTENT[PAGE_NAMES.skills] = {
		main: ['skills & publications']
	}

export default CONTENT