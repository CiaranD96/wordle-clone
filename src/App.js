import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    // return a 5 letter word from a random word api
    (async () => {
      const getWord = await fetch(
        'https://random-word-api.herokuapp.com/word?length=5'
      );
      const word = await getWord.json();
      setSolution(word[0]);
    })();
  }, [setSolution]);

  return (
    <div className='App'>
      <h1>Worlde Clone</h1>
      {solution && (
        <div>
          <Wordle solution={solution} />{' '}
        </div>
      )}
    </div>
  );
}

export default App;
