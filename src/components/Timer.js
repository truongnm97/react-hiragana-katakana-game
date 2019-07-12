import React, { useEffect, useState } from 'react'
import useInterval from '../hooks/useInterval'

const TimerContainer = props => {
  const [time, setTime] = useState(10)
  const [timerId, setTimerId] = useState(null)

  // Effect
  useEffect(() => {
    const tick = () => {
      if (time > 0) {
        setTime(time - 1)
      } else {
        props.handler()
      }
    }

    let id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  console.log('time...', time)

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
