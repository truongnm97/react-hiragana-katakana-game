import React, { useEffect, useState } from 'react'
import useInterval from '../hooks/useInterval'

const DEFAUL_TIMEOUT = 5

const TimerContainer = props => {
  const [time, setTime] = useState(DEFAUL_TIMEOUT)
  const [timerId, setTimerId] = useState(null)

  // Effect
  useEffect(() => {
    const tick = () => {
      setTime(time => {
        if (time > 0) {
          return time - 1
        } else {
          props.handler()
          return time
        }
      })
    }

    let id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setTime(DEFAUL_TIMEOUT)
  }, [props.currentCharacter])

  // useInterval(() => {
  //   if (time > 0) {
  //     setTime(time - 1)
  //   } else {
  //     props.handler()
  //   }
  // }, 1000)

  return <time>{time}</time>
}

export default TimerContainer
