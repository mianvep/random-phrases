import React from 'react'

const QuoteBox = ({quoteRandom, colorRandom, clickButton}) => {
  return (
    <article style={{color: colorRandom}} className="randomQuote">
            <div className="text">
                <i class="fa-solid fa-quote-left"></i>
                <h2>{quoteRandom.quote}</h2>
            </div>
            <p>{quoteRandom.author}</p>
            <button 
                style={{backgroundColor: colorRandom}} 
                className='quote__btn'
                onClick={clickButton}
            >&#62;</button>
        </article>
  )
}

export default QuoteBox