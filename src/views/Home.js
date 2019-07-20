import React, { Fragment, useState } from 'react'
import SweetAlert from 'sweetalert-react'

import { Answer, Character, StartButton, Title } from '../components'
import { DATA_LENGTH, DEFAULT_DATA, DEFAULT_LIFE } from '../constants'

const Home = () => {
	const [alertText, setAlertText] = useState('')
	const [alertTitle, setAlertTitle] = useState('')
	const [alertActive, setAlertActive] = useState(false)
	const [alertType, setAlertType] = useState('success')
	const [gameStart, setGameStart] = useState(false)
	const [characters, setCharacters] = useState({ ...DEFAULT_DATA })
	const [currentCharacter, setCurrentCharacter] = useState('')
	const [currentCharacterValue, setCurrentCharacterValue] = useState('')
	const [life, setLife] = useState(DEFAULT_LIFE)
	const [correctAnswer, setCorrectAnswer] = useState(0)

	const randomCharacter = (characters, reset = 0) => {
		const keys = Object.keys(characters)
		let chars = { ...DEFAULT_DATA }
		const result = keys[Math.round(Math.random() * (keys.length - 1))]
		setCurrentCharacterValue(characters[result])

		if (reset) {
			setCharacters({ ...DEFAULT_DATA })
			delete chars[result]
			setCharacters(chars)
		} else {
			chars = characters
			delete chars[result]
			setCharacters(chars)
		}
		return result
	}

	const checkAnswer = answer => {
		if (answer === currentCharacterValue) {
			setCorrectAnswer(correctAnswer + 1)
			setCurrentCharacter(randomCharacter(characters))
		} else {
			setAlertType('error')
			setAlertTitle('Woops')
			setAlertText(`${currentCharacter} is "${currentCharacterValue}"`)
			setCurrentCharacter(randomCharacter(characters))
			// if (life > 1) {
			//   setLife(life - 1)
			//   setCurrentCharacter(randomCharacter(characters))
			// } else {
			//   setGameStart(false)
			//   setLife(DEFAULT_LIFE)
			//   setCharacters(DEFAULT_DATA)
			// }
			setAlertActive(true)
		}
		// if (Object.keys(characters).length === 0) {
		//   setLife(DEFAULT_LIFE)
		//   setCharacters(DEFAULT_DATA)
		//   setGameStart(false)
		// }
	}

	const start = () => {
		setGameStart(true)
		setCurrentCharacter(randomCharacter(characters))
	}

	const end = () => {
		if (life > 1) {
			setCurrentCharacter(randomCharacter(characters))
			setLife(life - 1)
		} else {
			setGameStart(false)
			setLife(DEFAULT_LIFE)
			setCharacters({ ...DEFAULT_DATA })
		}
	}

	const onConfirmAlert = () => {
		setAlertActive(false)
	}

	const onReset = reset => {
		setLife(DEFAULT_LIFE)
		setCorrectAnswer(0)
		setCharacters({ ...DEFAULT_DATA })
		setCurrentCharacter(randomCharacter(characters, reset))
	}

	return (
		<div className="container">
			{!gameStart ? (
				<Fragment>
					<Title>Learn Hiragana/Katakana</Title>
					{/* <Title>{`Corrected: ${correctAnswer}/${DATA_LENGTH}`}</Title> */}
					<StartButton handler={start} />
				</Fragment>
			) : (
				<Fragment>
					<SweetAlert
						type={alertType}
						text={alertText}
						title={alertTitle}
						show={alertActive}
						onConfirm={onConfirmAlert}
					/>
					{/* <Timer handler={end} currentCharacter={currentCharacter} /> */}
					<Title>Guess The Character</Title>
					<Character>{currentCharacter}</Character>
					<Answer handler={checkAnswer} onReset={() => onReset(1)} />
					{/* <Title>{`Chance: ${life}`}</Title> */}
					<Title>{`Characters: ${Object.keys(characters).length + 1}`}</Title>
					<Title>{`Corrected: ${correctAnswer}/${DATA_LENGTH}`}</Title>
				</Fragment>
			)}
		</div>
	)
}

export default Home
