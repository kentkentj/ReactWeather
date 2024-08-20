import { useState, useEffect } from "react";
import axios from "axios";

import { GreetingTime } from "./hook/GreetingTime";
import Sunny from "./assets/weather_condition/sunny.json";
import BackgroundSunny from "./assets/background/good_weather_bg.json";
import Lootie from "lottie-react";

//call weather api
const API_BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "1e4ee6f57cd54d9c9f032039241208"; // Your actual API key

//call forecast api
const API_BASE_URL_FORECAST = "https://api.weatherapi.com/v1/forecast.json";

let getGreetingTime = new GreetingTime();

interface Weather {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
    wind_dir: string;
    wind_kph: number;
  };
}

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
    };
  };
}
interface Forecast {
  forecast: {
    forecastday: ForecastDay[];
  };
}

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [location, setLocation] = useState("Agno, Pangasinan");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherAndForecast = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch current weather
        const weatherResponse = await fetch(
          `${API_BASE_URL}?key=${API_KEY}&q=${location}&aqi=no`
        );
        if (!weatherResponse.ok)
          throw new Error(`HTTP error! status: ${weatherResponse.status}`);
        const weatherData: Weather = await weatherResponse.json();
        setWeather(weatherData);

        // Fetch 5-day forecast
        const forecastResponse = await fetch(
          `${API_BASE_URL_FORECAST}?key=${API_KEY}&q=${location}&days=5`
        );
        if (!forecastResponse.ok)
          throw new Error(`HTTP error! status: ${forecastResponse.status}`);
        const forecastData: Forecast = await forecastResponse.json();
        setForecast(forecastData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherAndForecast();
  }, [location]);
  return (
    <>
      <div id="main">
        <div className="container mx-auto h-100">
          <div className="flex flex-wrap -mx-3 mb-5 removabl mt-20">
            {/* SECTION 1 */}
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0 drop-zone">
              <div id="section-1">
                <div id="great">
                  <h1 className="text-9xl font-bold tracking-tight text-gray-900 sm:text-9xl font-extrabold">
                    {getGreetingTime.GetGreetingTime()}
                  </h1>
                </div>
                <div id="status">
                  <p className="pt-5 text-2xl font-light">
                    Hello, Its Perfect for morning walk
                  </p>
                </div>
                <div className="relative h-32 w-100" id="wind">
                  <div className="absolute bottom-0 left-0 h-16">
                    <p className="pt-5 text-2xl font-light">Wind</p>
                    <p className="text-2xl font-normal">
                      Speed: {weather ? weather.current.wind_kph : "windkph"}{" "}
                      kph
                    </p>
                    <p className="text-2xl font-light">
                      Direction:{" "}
                      {weather ? weather.current.wind_dir : "Direction"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END SECTION 1 */}

            {/* SECTION 2 */}
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0 drop-zone">
              <div className="flex h-screen">
                <div className="m-auto">
                  <div style={{ width: "500px" }}>
                    <Lootie animationData={Sunny} />
                  </div>
                </div>
              </div>
            </div>
            {/* END SECTION 2 */}

            {/* SECTION 3 */}
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0 drop-zone">
              <div id="temp">
                <div className="relative h-32 w-full ...">
                  <div className="absolute top-0 right-0">
                    <span className="text-9xl font-bold tracking-tight text-gray-900 sm:text-9xl font-extrabold">
                      {weather ? weather.current.temp_c : "--"}
                      <sup className="font-light">°C</sup>
                    </span>

                    <div className="pt-5" id="area">
                      <p className="text-2xl font-light">
                        {weather
                          ? `${weather.location.name}, ${weather.location.country}`
                          : "Location, Country"}
                      </p>
                      <p className="text-2xl font-light">
                        {weather ? weather.current.condition.text : "Condition"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 w-full" id="five-day-forecast">
                <div className="absolute bottom-0 right-0 h-16 w-80">
                  {/** 5 Day Weather List */}

                  <div>
                    <table>
                      {forecast
                        ? forecast.forecast.forecastday.map((day) => (
                            <tr key={day.date}>
                              <td
                                className="forecast_detail"
                                style={{ paddingRight: "5rem" }}
                              >
                                {new Date(day.date).toLocaleDateString(
                                  "en-US",
                                  { weekday: "short" }
                                )}
                              </td>
                              <td
                                className="forecast_detail"
                                style={{
                                  paddingRight: "5rem",
                                  fontWeight: "lighter",
                                }}
                              >
                                {day.day.avgtemp_c}°C
                              </td>
                              <td style={{ width: "100px" }}>
                                <Lootie animationData={Sunny} />
                              </td>
                            </tr>
                          ))
                        : "Loading forecast..."}
                    </table>
                  </div>
                  {/*END 5 Day Weather List*/}
                </div>
              </div>
            </div>
            {/* END SECTION 3 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
