import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'

const StartButton = props => {
	// redux

	const state = useSelector(mapState)
	const dispatch = useDispatch()
	const { add } = mapDispatch(dispatch)

	return (
		<div className='container'>
			<div className='row'>
				<Button
					onClick={() => {
						props.handler()
						add(123)
					}}
					style={{
						display: 'block',
						margin: 'auto',
					}}>
					Start Game
				</Button>
			</div>
		</div>
	)
}

const mapState = state => ({
	test: state.test,
})

const mapDispatch = dispatch => ({
	add: item => dispatch({ type: 'ADD_ITEM', item }),
})

export default StartButton
