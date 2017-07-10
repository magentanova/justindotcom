import {PAGE_NAMES} from '../utils.js'

const CONTENT = {}

CONTENT[PAGE_NAMES.home] = {
		main: [
				"I'm a technologist, an educator, and a writer. I'm always looking to take on new projects and deepen my skills.",
				"When it comes to tech, my areas of expertise are natural language processing, machine learning, and full-stack web development. I also have years of experience as a teacher, including three years spent training software developers. Further back, I was trained as a journalist and worked as a reporter for several magazines and newsweeklies.",
				`For a closer look, check out my <a href='${PAGE_NAMES.projects}'>projects & publications</a>, my <a href='${PAGE_NAMES.skills}'>skills page</a>, and my profiles on the sites below. Click the mail button to contact me directly.`]
	}

CONTENT[PAGE_NAMES.projects] = {
		main: ["My work falls into two main categories: Research to improve the state-of-the art in natural language processing, and JavaScript-based web development for the client and the server. Some of the latter work was done through my role as the instructor of an immersive web-development course."],
		projects: [
			{
				title: "Bloq",
				subtitle: [
					"Bloq is a complex game with simple rules. Quick to learn, tricky to master, highly addictive. <a href='http://magentanova.github.io/bloq'>Try it out.</a> Designed as a mobile game for iOS, Bloq recently completed its first round of beta testing to rave reviews.", 
					"It was <a href='https://github.com/magentanova/bloq'>written</a> in vanilla JS and CSS, without libraries or frameworks, and ported onto the iOS platform using Cordova. I had a great time building it. It was especially fun for me to customize an event system, a state manager, and promise-based animations."
					],
				image: {
					src: "./images/bloq.png",
					link: 'http://magentanova.github.io/bloq'
				}
			},
			{
				title: "Maestro",
				subtitle: [
					"I created a <a href='http://maestrodocs.com'>code generator and build system</a> for full-stack JavaScript applications. Though flexible, it is designed for a MERN (Mongo Express React Node) stack. It includes a built-in user authentication system. Its big brother, <a href='https://github.com/magentanova/generator-mpro'>mPro</a>, also includes a command-line tool for quick build-out of data models and REST API routes."
					],
				image: {
					src: "./images/maestro.png",
					link: 'http://maestrodocs.com'
				}
			},
			{
				title: "Research",
				subtitle: [
					"I presented <a href='http://www.cs.columbia.edu/nlp/papers/2014/IS141206.PDF'>two</a> <a href='http://ieeexplore.ieee.org/document/6855123/'>papers</a> at international conferences in response to the BABEL challenge put out by the Department of Defense's IARPA division. My team used machine learning and natural language processing to improve the keyword-search output of our project partners at IBM.",
					" A <a href='https://www.researchgate.net/publication/288800506_Let_me_finish_Automatic_conflict_detection_using_speaker_overlap'>third paper</a>, presents a machine-learning method for detecting interpersonal conflict in recorded speech."
					],
				image: {
					src: "./images/isca_logo.square.png",
					link: ''
				}
			},
		]
	}

CONTENT[PAGE_NAMES.skills] = {
		main: [
			"I'm all about intersections of value. Today's world is highly interdisciplinary, and I'm grateful that my own path has allowed me to combine disparate skills to address gaps I've been uniquely suited to fill. I've combined my expertise in written language with an education in computer science to make strides in natural language processing. I've combined my experience as a teacher with my programming skills to place scores of new developers in software engineering jobs as the leader of an immersive course at a code boot camp.",
			 "My latest projects are studying Russian, learning ClojureScript and writing an anthology series for <a href='https://oddlightcomics.com'>Odd Light Comics</a>. This page, made with React, is <a href='https://github.com/magentanova/justindotcom'>my first go</a> at using push-state routing with React views.",
			 "To accompany <a href='/images/resume.pdf'>my resume</a>, my core skills are listed below. The list is not exhaustive, so feel free to reach out if you need something done and want to see whether it's a good fit."],
		skillGroups: [
			{
				heading: "Tech",
				skills: [
					{
						skill: "Python",
						details: "NLTK, NumPy, SciPy, SciKitLearn, Pandas, Selenium, BeautifulSoup, Django and more"
					},
					{
						skill: "Front-end Web",
						details: "JavaScript, React, MVC, SPA, CSS, SCSS, etc.  Probably best to ask, as front-end development is basically the Library of Babel."
					},
					{
						skill: "Back-end Web",
						details: "Node, Express, Passport, Mongo, Mongoose, REST"
					},
					{
						skill: "General Computer Science",
						details: "machine learning, natural language processing, data science, algorithms and data structures"
					}
				]
			},
			{
				heading: "Languages",
				skills: [
					{
						skill: "Spanish",
						details: "fluent"
					},
					{
						skill: "German",
						details: "proficient"
					},
					{
						skill: "French",
						details: "conversant"
					},
					{
						skill: "Chinese",
						details: "competent"
					},
					{
						skill: "Russian",
						details: "getting there"
					}
				]
			},
			{
				heading: "Other",
				skills: [
					{
						skill: "Communication",
						details: "writing, editing, public speaking"
					},
					{
						skill: "Pedagogy",
						details: "curriculum design, lesson planning, classroom management"
					}
				]
			}
		]
	}

export default CONTENT