import { useEffect, useState } from "react";
import axios from "axios";
// import { debounce } from "lodash";

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [results, setResults] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  // const [timeOutId, setTimeOutId] = useState(null);
  // const [debouncedSearch, setDebouncedSearch] = useState("");

  const baseurl = "https://restcountries.com/v3.1";

  // const handleSearch = (event) => {
  //     const targetValue = event.target.value;
  //     console.log(targetValue);
  //     setNewSearch(targetValue);
  // }

  // const handleSearch = (event) => {
  //   const targetValue = event.target.value;
  //   console.log(targetValue);
  //   setNewSearch(targetValue);

  //   if (timeOutId) {
  //     clearTimeout(timeOutId);
  //   }

  //   const newTimeOutId = setTimeout(() => {
  //     if (targetValue !== "") {
  //       axios
  //         .get(`${baseurl}all`)
  //         .then((res) => res.data)
  //         .then((countryList) => {
  //           return countryList.map((c) => c.name.common);
  //         })
  //         .then((res) => {
  //           // console.log(res);
  //           // console.log(Array.isArray(res));
  //           // console.log(typeof res);
  //           setResults(res.filter((c) => c.toLowerCase().includes(newSearch)));
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     } else {
  //       setResults([]);
  //     }
  //   }, 300);

  //   setTimeOutId(newTimeOutId)
  // };

  // newSearch useEffect
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (newSearch !== "") {
        axios
          .get(`${baseurl}/all?fields=name`)
          .then((res) => res.data)
          .then((countryList) => {
            return countryList.map((c) => c.name.common);
          })
          .then((res) => {
            // console.log(res);
            // console.log(Array.isArray(res));
            // console.log(typeof res);
            setResults(res.filter((c) => c.toLowerCase().includes(newSearch)));
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        setResults([]);
      }
    }, 600);

    return () => clearTimeout(timeOutId);
  }, [newSearch]);

  // singleCountry useEffect
  useEffect(() => {
    if (singleCountry !== "") {
      axios.get(`${baseurl}/name/${singleCountry}`).then((res) => {
        console.log(res.data[0]);

        const countryDataCheck = res.data[0].name;
        console.log(countryDataCheck);
        if (countryDataCheck) {
          setCountryData(res.data[0]);
        }
      })
        .catch(err => console.error(err))
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?q=${singleCountry}&key=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((res) => {
          console.log(res.data);
          setWeatherData(res.data);
        });
    }
  }, [singleCountry]);

  // weatherapi useEffect
  useEffect(() => {});

  const handleShowClick = (country) => {
    setSingleCountry(country.toLowerCase());
  };

  const ResultList = () => (
    <ol>
      {results.sort().map((result, index) => (
        <li key={index}>
          {result}
          <button onClick={() => handleShowClick(result)}>show</button>
        </li>
      ))}
    </ol>
  );

  const CountryInfo = ({ data }) => {
    // console.log(data);

    return (
      <>
        <hr />
        <hr />
        <h1>{data.name.common}</h1>
        <h4>Official Name: {data.name.official}</h4>
        <img src={data.flags.svg} style={{ width: "600px" }} alt="" />
        <div>Independent Country: {data.independent.toString()}</div>
        <div>UN Member: {data.unMember.toString()}</div>
        <div>Region: {data.subregion}</div>
        <div>
          <b>Capital: {data.capital}</b>
        </div>
        <div>Population: {data.population.toLocaleString()}</div>
        <div>Area: {data.area.toLocaleString()} km²</div>
        <div>
          Timezone:
          {data.timezones.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </div>
        <div>
          Languages:
          {Object.values(data.languages).map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </div>
      </>
    );
  };

  const WeatherInfo = ({ weatherData }) => {
    return (
      <>
        <hr />
        <hr />
        <h1>
          Weather in {weatherData.location.name}, {weatherData.location.country}
        </h1>
        <img
          src={weatherData.current.condition.icon}
          style={{ width: "150px" }}
          alt=""
        />
        <div>condition: {weatherData.current.condition.text}</div>
        <div>local time: {weatherData.location.localtime} (24h format)</div>
        <div>last updated: {weatherData.current.last_updated}</div>
        <br />
        <div>temp: {weatherData.current.temp_c}C</div>
        <div>feels like: {weatherData.current.feelslike_c}C</div>
        <div>humidity: {weatherData.current.humidity}%</div>
        <div>rain: {weatherData.current.precip_mm}mm</div>
        <div>visibility: {weatherData.current.vis_km}km</div>
        <div>windspeed: {weatherData.current.wind_kph}/kph</div>
      </>
    );
  };

  return (
    <>
      search:
      <input value={newSearch} onChange={(e) => setNewSearch(e.target.value)} />
      {/* {short circuit AND evaluation where if left is true it stops}  */}
      {newSearch === "" || <ResultList />}
      {/* {console.log(countryData)} */}
      {countryData === null || <CountryInfo data={countryData} />}
      {weatherData === null || <WeatherInfo weatherData={weatherData} />}
    </>
  );
}

export default App;
