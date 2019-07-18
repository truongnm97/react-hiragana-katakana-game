import React, { Component } from 'react'
import Button from './Button'

export default class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: ''
    }
  }

  componentDidMount() {
    this.nameInput.focus()
  }

  componentDidUpdate() {
    this.nameInput.focus()
  }

  handleChange(e) {
    this.setState({
      answer: e.target.value
    })
  }

  checkAnswer = (e) => {
    e.preventDefault()
    this.props.handler(this.state.answer)
    this.setState({
      answer: ''
    })
  }

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.checkAnswer}>
        <input
          value={this.state.answer}
          placeholder="Type the answer here"
          onChange={this.handleChange.bind(this)}
          ref={(input) => { this.nameInput = input; }}
          style={{
            flexGrow: '1',
            fontSize: '.7em',
            cursor: 'pointer',
            marginRight: '1em',
            padding: '1em',
            marginBottom: '1em',
            borderRadius: '3px',
            transition: '.3s ease',
            border: '3px solid #fff'
          }}
        />
        <Button type="submit" style={{ marginRight: '1em' }}>Submit</Button>
        <Button type="button" onClick={this.props.onReset}>Reset</Button>
      </form>
    )
  }
}
