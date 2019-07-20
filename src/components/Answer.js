import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'

const Input = styled.input`
	flex-grow: 1;
	font-size: 0.7em;
	cursor: pointer;
	margin-right: 1em;
	padding: 1em;
	margin-bottom: 1em;
	border-radius: 3px;
	transition: 0.3s ease;
	border: 3px solid #fff;
`

const Answer = props => {
	const [answer, setAnswer] = useState('')
	const nameInput = useRef(null)

	const handleChange = e => {
		setAnswer(e.target.value)
	}

	const checkAnswer = e => {
		e.preventDefault()
		props.handler(answer)
		setAnswer('')
	}

	return (
		<form style={{ display: 'flex' }} onSubmit={checkAnswer}>
			<Input
				value={answer}
				placeholder='Type the answer here'
				onChange={handleChange}
				ref={nameInput}
			/>
			<Button type='submit' style={{ marginRight: '1em' }}>
				Submit
			</Button>
			<Button type='button' onClick={props.onReset}>
				Reset
			</Button>
		</form>
	)
}

Answer.propTypes = {
	handler: PropTypes.func,
	onReset: PropTypes.func,
}

export default Answer
