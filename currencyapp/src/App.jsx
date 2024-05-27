import { useState, useEffect } from 'react';
import './App.css';
import { Input } from './components/index.js';
import bg from './assets/bg.png';
import useRates from './hooks/useRates.js';

function App() {
  const [amount, setAmount] = useState('0');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('eur');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyRates = useRates(from);
  const options = Object.keys(currencyRates);

  const convert = () => {
    if (currencyRates[to]) {
      const convertedValue = (currencyRates[to] * amount).toFixed(2);
      setConvertedAmount(convertedValue);
    }
  };

  useEffect(() => {
    convert();
  }, [from, to, amount]);

  const swapAndConvert = () => {
    setFrom((prevFrom) => {
      const newFrom = to;
      setTo(prevFrom);
      setTimeout(convert, 0); 
      return newFrom;
    });
  };

  return (
    <>
      <div className="w-screen bg-cover h-screen flex items-center justify-center flex-wrap" style={{ backgroundImage: `url(${bg})` }}>
        <div className='w-fit px-4 pb-8 flex items-center justify-center flex-col border-2 border-red-300 relative p-6'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full max-w-md items-center">
              <Input
                label='From'
                amount={amount}
                currencyDisabled={false}
                onAmountChange={(value) => setAmount(value)}
                onCurrencyChange={(currency) => setFrom(currency)}
                SelectedCurrency={from}
                currencyOption={options}
              />
            </div>
            <button onClick={swapAndConvert} className='absolute swap -mt-5 ml-6 bg-blue-800 flex items-center justify-center gap-3 px-2 py-2 rounded-full top-1/2 left-1/2 -translate-x-12 -translate-y-1/2 text-white text-4xl'><i className="ri-swap-line"></i></button>
            <div className="w-full max-w-md z-30 items-center">
              <Input
                label='To'
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                SelectedCurrency={to}
              />
            </div>
            <button className='py-2 w-fit px-10 text-center ml-20 text-xl bg-blue-700 text-white rounded-md' type="submit">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
