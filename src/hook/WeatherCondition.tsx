import Sunny from "../assets/weather_condition/sunny.json";
import BackgroundSunny from "../assets/background/good_weather_bg.json";
import Lootie from "lottie-react";
function getWeatherConditionIcon(code: any) {
  switch (code) {
    case 1000:
      <Lootie animationData={Sunny} />;
      return code;
  }
}
