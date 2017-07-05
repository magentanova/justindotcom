import React from 'react'
import ReactDOM from 'react-dom'

import Site from './views/site.js'
import {PageEvent, pushPageState} from './utils.js'


console.log('hello there.')
console.log('this site was created using react.js, using vanilla js for push-state routing and custom css for design.')
console.log('it\'s run on a node/express server.')
console.log('thanks for stopping by.')
const app = function() {

  window.onpopstate = function(event) {
  	window.dispatchEvent(PageEvent(event.state.page))
  }

  window.addEventListener('newPage', e => {
  	if (event.detail) {
  		ReactDOM.render(<Site page={event.detail} />, document.querySelector('.container'))
  	}
  })

  var pathParts = location.pathname.split('/')
  var pathTail = pathParts[pathParts.length - 1] || 'home'
  ReactDOM.render(<Site page={pathTail} />, document.querySelector('.container'))
}

app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..