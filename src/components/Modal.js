import React, { Fragment, useEffect, useState } from 'react';

export default function Modal({ isCorrect, turn, solution, resetGame }) {
  const [definitions, setDefinitons] = useState([]);
  const [error, setError] = useState('');

  // get the definition of the word from dictionary api
  useEffect(() => {
    (async () => {
      let definition = [];
      try {
        const getDefinition = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${solution}`
        );
        definition = await getDefinition.json();
        if (definition) setDefinitons(definition[0].meanings[0].definitions);
      } catch (e) {
        setError('Oops, could not find that word!');
      }
    })();
  }, [solution]);

  return (
    <div className='modal'>
      <div className='modal-body'>
        {isCorrect && (
          <Fragment>
            <h1>Congratulations, you win!</h1>
            <p className='solution correct'>{solution}</p>
            <p>
              You found the solution in <strong>{turn}</strong> guesses
            </p>
            <button className='reset' onClick={resetGame}>
              Reset Game
            </button>
            <div className='description'>
              <h4>Description</h4>
              {definitions &&
                definitions.map((def, index) => (
                  <p key={index}>{def.definition}</p>
                ))}
              {error && <p>{error}</p>}
            </div>
          </Fragment>
        )}
        {!isCorrect && (
          <Fragment>
            <h1>Unlucky, you lose!</h1>
            <p className='solution incorrect'>
              The correct answer was "{solution}"
            </p>
            <p>Better luck next time</p>
            <button className='reset' onClick={resetGame}>
              Reset Game
            </button>
            <div className='description'>
              <h4>Description</h4>
              {definitions &&
                definitions.map((def, index) => (
                  <p key={index}>{def.definition}</p>
                ))}
              {error && <p>{error}</p>}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
