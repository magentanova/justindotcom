import React from 'react'

export const PAGE_NAMES = {
	home: "home",
	projects: "projects-and-publications",
	skills: "skills"
}

export const PageEvent = pageName => new CustomEvent('newPage', {detail: pageName})

export const pushPageState = pageName => {
	window.history.pushState({
		page: pageName,
	},pageName,'/' + pageName)
	window.dispatchEvent(PageEvent(pageName))
}

export const parseLinks = content => {
	var m = content.match(/<a href=['"](.+?)['"]>(.+?)<\/a>/i),
		links = [],
		textChunks = [],
		children = []
	if (!m) return content
	while (m) {
		let [all,path,linkText] = m
		children.push(content.slice(0,content.indexOf(all))) // add text that preceded link
		// add link that was found, either an external link or an internal link.
		if (path.includes('http')) children.push(<a target="_blank" href={path}>{linkText}</a>) 
		else {
			children.push(<a key={path} target="_blank" onClick={e => {
				pushPageState(path)
				e.preventDefault()
			}}>{linkText}</a>)
		}
		content = content.slice(content.indexOf(all) + all.length) // search content after the discovered link
		m = content.match(/<a href=['"](.+?)['"]>(.+?)<\/a>/i)
	}	

	children.push(content) //add any remaining text after the last link was added
	return children
}
