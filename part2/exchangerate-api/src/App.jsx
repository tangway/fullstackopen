import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Currencies } from 'currencies-map';

const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)

  // const currencyCode = 'SGD';
  // console.info(currencyCode + ': ' + Currencies.names.get(currencyCode));

  useEffect(() => {
    console.log('effect run, currency is now', currency)

    // skip if currency is not defined
    if (currency) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then(response => {
          // (sorting code from phind) Sort the rates object in ascending order
          const sortedRates = Object.entries(response.data.rates)
            .sort((a, b) => a[1] - b[1])
            .reduce((obj, [key, value]) => {
              obj[key] = value;
              return obj;
            }, {});

          setRates(sortedRates);
        })
    }
  }, [currency])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCurrency(value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App
