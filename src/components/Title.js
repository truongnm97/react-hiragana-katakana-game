import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const H1 = styled.h1`
	font-size: 1.5em;
	margin-bottom: 1em;
	letter-spacing: 0.3em;
	text-transform: uppercase;
	font-family: Lato, sans-serif;
`
const Title = props => (
	<div className='container'>
		<div className='row'>
			<div className='col-md-12'>
				<H1>{props.children}</H1>
			</div>
		</div>
	</div>
)

Title.propTypes = {
	children: PropTypes.any,
}

export default Title
