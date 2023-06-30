import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {lettersCount: 0}

  updateLetterCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="letter-calculator-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="letters-calculator-img"
        />
        <div className="letters-calculator-txt-container">
          <h1 className="letters-calculator-heading">
            Calculate the Letters you enter
          </h1>
          <div>
            <label htmlFor="input" className="letters-calculator-label-txt">
              Enter the phrase
            </label>
            <br />
            <input
              id="input"
              type="text"
              onChange={this.updateLetterCount}
              className="letters-calculator-input"
              placeholder="Enter the phrase"
            />
          </div>
          <p className="letters-calculator-counter">
            No.of letters: {lettersCount}
          </p>
        </div>
      </div>
    )
  }
}

export default LetterCalculator
