import React, { Component } from 'react'
import Button from './Button'
import {connect, useSelector, useDispatch} from 'react-redux';

const StartButton = (props) => {
  // redux
  
  const state = useSelector(mapState)
  const dispatch = useDispatch();
  console.log(state.test)
  const { add } = mapDispatch(dispatch)
  
  console.log(state.test)
  return (

    <Button
        onClick={() => {
          props.handler()
          add(123)
        }}
        style={{
          display: 'block',
          margin: 'auto'
        }}
      >
        Start Game
      </Button>
  )
}


const mapState = state => ({
  test: state.test
})

const mapDispatch = dispatch => ({
  add : (item) => dispatch({type:'ADD_ITEM',item})
})

export default StartButton

// class StartButton extends Component {
//   render() {
//     console.log(this.props.test);
//     return (
//       <Button
//         onClick={() => this.props.handler()}
//         style={{
//           display: 'block',
//           margin: 'auto'
//         }}
//       >
//         Start Game
//       </Button>
//     )
//   }

//   start() {
//     return () => alert('test')
//   }
// }
// export default connect(function(state){
//   return {test: state.test}
// })(StartButton);

