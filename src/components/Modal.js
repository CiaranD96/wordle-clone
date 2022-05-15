import React, { Fragment } from 'react';

export default function Modal({ isCorrect, turn, solution, resetGame }) {
  return (
    <div className='modal'>
      <div>
        {isCorrect && (
          <Fragment>
            <h1>Congratulations, you win!</h1>
            <p className='solution correct'>{solution}</p>
            <p>
              You found the solution in <strong>{turn}</strong> guesses
            </p>
          </Fragment>
        )}
        {!isCorrect && (
          <Fragment>
            <h1>Unlucky, you lose!</h1>
            <p className='solution incorrect'>
              The correct answer was "{solution}"
            </p>
            <p>Better luck next time</p>
          </Fragment>
        )}
        <button className='reset' onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
