import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json'

const arrayColors = ['#8C2740', '#968C66', '#7CCAC8', '#144FAD', '#5F6364', '#2C234C'];

function App() {

  const getQuotesRandom = array => {
    return Math.floor(Math.random()*array.length)
  }

  const getElementRandom = array => {
    const i = getQuotesRandom(array)
    return array[i]
  }

  const [quoteRandom, setquoteRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setcolorRandom] = useState(getElementRandom(arrayColors))

  const clickButton = () => {
    setquoteRandom(getElementRandom(quotes))
    setcolorRandom(getElementRandom(arrayColors))
  }


  const appStyle = {
    backgroundColor: colorRandom
  }
  
  return (
    <div style={appStyle} className="App">
      <QuoteBox
        quoteRandom = {quoteRandom}
        colorRandom = {colorRandom}
        clickButton = {clickButton}
      />
    </div>
  )
}

export default App
