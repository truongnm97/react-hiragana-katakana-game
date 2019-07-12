import React, { Fragment, Component, useState } from 'react'
import Title from './components/Title.js'
import Timer from './components/Timer.js'
import Alert from './components/Alert.js'
import SweetAlert from 'sweetalert-react'
import Button from './components/Button.js'
import Answer from './components/Answer.js'
import Hiragana from './syllabary/Hiragana.js'
import Katakana from './syllabary/Katakana.js'
import Character from './components/Character.js'
import StartButton from './components/StartButton.js'

const App = props => {
  const [alertText, setAlertText] = useState('')
  const [alertTitle, setAlertTitle] = useState('')
  const [alertActive, setAlertActive] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [gameStart, setGameStart] = useState(false)
  const [characters, setCharacters] = useState(Object.assign(Hiragana, Katakana))
  const [currentCharacter, setCurrentCharacter] = useState('')

  const randomCharacter = characters => {
    let result
    let count = 0
    Object.keys(characters).map(character => {
      if (Math.random() < 1 / ++count) result = character
    })
    return result
  }

  const checkAnswer = answer => {
    if (answer === characters[currentCharacter]) {
      setCurrentCharacter(randomCharacter(characters))
    } else {
      setAlertType('error')
      setAlertTitle('Woops')
      setAlertText(`${currentCharacter} is "${characters[currentCharacter]}"`)
      setAlertActive(true)
      setCurrentCharacter(randomCharacter(characters))
    }
  }

  const start = () => {
    setGameStart(true)
    setCurrentCharacter(randomCharacter(characters))
  }

  const end = () => {
    setGameStart(false)
  }

  return (
    <div>
      {!gameStart ? (
        <Fragment>
          <Title>Learn Hiragana/Katakana</Title>
          <StartButton handler={start} />
        </Fragment>
      ) : (
        <Fragment>
          <SweetAlert
            type={alertType}
            text={alertText}
            title={alertTitle}
            show={alertActive}
            onConfirm={() => setAlertActive(false)}
          />
          <Timer handler={end}/>
          <Title>Guess The Character</Title>
          <Character>{currentCharacter}</Character>
          <Answer handler={checkAnswer} />
        </Fragment>
      )}
    </div>
  )
}

export default App
