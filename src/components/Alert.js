import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Background = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: center;
	background: rgba(0,0,0,0.5);
`

const AlertContainer = styled.div`
	color: #000;
	padding: 1em;
	background: #fff;
	text-align: center;
	border-radius: 3px;
	box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);
`

const Alert = props => (
	<div>
		{props.active === true ? (
			<Background>
				<AlertContainer>
					<strong>test</strong>
					<div>{props.children}</div>
				</AlertContainer>
			</Background>
		) : null}
	</div>
)


Alert.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.any
}

export default Alert