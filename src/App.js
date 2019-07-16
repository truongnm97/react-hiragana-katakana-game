import React, { Fragment, Component, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import configStore from './redux/configStore'
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

const DEFAULT_LIFE = 1000
const DEFAULT_DATA = Object.assign(Hiragana)
const DATA_LENGTH = Object.keys({...DEFAULT_DATA}).length

const App = props => {
  const [alertText, setAlertText] = useState('')
  const [alertTitle, setAlertTitle] = useState('')
  const [alertActive, setAlertActive] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [gameStart, setGameStart] = useState(false)
  const [characters, setCharacters] = useState({...DEFAULT_DATA})
  const [currentCharacter, setCurrentCharacter] = useState('')
  const [currentCharacterValue, setCurrentCharacterValue] = useState('')
  const [life, setLife] = useState(DEFAULT_LIFE)
  const [correctAnswer, setCorrectAnswer] = useState(0)

  const randomCharacter = (characters,reset=0) => {
    const keys = Object.keys(characters)
    const chars = characters
    const result = keys[Math.round(Math.random() * (keys.length - 1))]
    setCurrentCharacterValue(characters[result])
    
    if(reset) {
      setCharacters({...DEFAULT_DATA})
      
    }
    else{      
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
      setCharacters({...DEFAULT_DATA})
    }
  }

  const onConfirmAlert = () => {
    setAlertActive(false)
  }

  const onReset = (reset) => {
    setLife(DEFAULT_LIFE)
    setCorrectAnswer(0)
    setCharacters({...DEFAULT_DATA})
    setCurrentCharacter(randomCharacter(characters,reset))
    console.log('data...', DEFAULT_DATA)
  }
 
  return (
    <Provider store={configStore.store}>
      <PersistGate persistor={configStore.persistor}>
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
            <Answer handler={checkAnswer} onReset={()=>onReset(1)}/>
            {/* <Title>{`Chance: ${life}`}</Title> */}
            <Title>{`Characters: ${Object.keys(characters).length + 1}`}</Title>
            <Title>{`Corrected: ${correctAnswer}/${DATA_LENGTH}`}</Title>
          </Fragment>
        )}
      </PersistGate>
    </Provider>
  )
}

export default App
