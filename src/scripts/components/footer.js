import React, {Component} from 'react'

class Footer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="footer">
				<div className="contact-icons">
					<a href="https://stackoverflow.com/users/3786409/magenta-nova">
						<i className="fa fa-stack-overflow" aria-hidden="true"></i>
					</a>
					<a href="https://github.com/magentanova">
						<i className="fa fa-github" aria-hidden="true"></i>
					</a>
					<a href="https://www.linkedin.com/in/justin-richards-4651987/">
						<i className="fa fa-linkedin-square" aria-hidden="true"></i>
					</a>
					<a href="mailto:richards.justind@gmail.com">
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</a>
				</div>
			</div>
			)
	}
}

export default Footer