
import { useState } from 'react';
import './styles.css';

function App() {

  const [prime, setPrime] = useState('');
  const [time, setTime] = useState('');
  const [inputValue, setInputValue] = useState('');

  function calculatePrimeQtt(intKeyboard){
    let primeQtt = 0
    const startTime = performance.now();
    for (var i = intKeyboard; i >= 2; i--){
      if (isPrime(i)){
        primeQtt++
      } 
    }
    setPrime(primeQtt) 
    const endTime = performance.now();
    setTime(`${endTime - startTime}ms`);
  }

  function isPrime(num){
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for(var i=num-1; i >= 2; i--){
      if(num%i===0){
        return false
      }
    }
    return true
  }

  const handleButtonClick = () => {
    calculatePrimeQtt(parseInt(inputValue));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div>
      <main className="container">
        <h1 className="title">QUANTIDADE DE NÚMEROS PRIMOS</h1>

        <div className="containerInput">
          <input 
            type="text" 
            placeholder='Digite um número inteiro'
            value={inputValue}
            onChange={handleInputChange}/>
        </div>

        <button className='resultButton' onClick={handleButtonClick}>Ver resultado</button>

        <div classname="resultContainer">

          <div className='primeResult'>
            <h2 className='primeLabel'>Resultado:</h2>
            <h2 className='prime'>{prime}</h2>
          </div>

          <div className='timeResult'>
            <h2 className='timeLabel'>Tempo levado para calculá-lo:</h2>
            <h2 className='time'>{time}</h2>
          </div>

        </div>
      </main>
      <footer className='autorName'>Developed by Luana Ronau</footer>
    </div>
  );
}

export default App;
