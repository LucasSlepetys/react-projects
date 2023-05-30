import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#A1A1D4');
  const [guessList, setGuessList] = useState([]);
  const [message, setMessage] = useState('Choose One');
  const [background, setBackground] = useState('');

  function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function checkAnswer(e) {
    e.preventDefault();

    if (e.target.textContent === color) {
      setBackground('correct');
      setMessage('Correct!');
      update();
    } else {
      setBackground('wrong');
      setMessage('Wrong');
    }
  }

  function update() {
    const random = generateColor();
    setColor(random);
    setGuessList(
      [random, generateColor(), generateColor()].sort(() => 0.5 - Math.random())
    );
  }

  useEffect(() => {
    update();
  }, []);
  return (
    <div className='App'>
      <div className='color-container' style={{ background: color }}></div>
      <div className='display'>
        {guessList.map((color) => {
          return (
            <div
              className='color-name'
              value={color}
              onClick={checkAnswer}
              key={color}
            >
              {color}
            </div>
          );
        })}
      </div>
      <div className={background}>{message}</div>
    </div>
  );
}

export default App;
