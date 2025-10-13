import React, { useState } from "react";
import { toCelsius, toFahrenheint, tryConvert } from "../utils/convert";

function TemperatureInput({ temperature, onTemperatureChange, scale }) {
  const scaleNames = { c: "Celsius", f: "Fehrenheit" };

  return (
    <fieldset>
      <legend>Masukkan suhu dalam {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value, scale)}
      />
    </fieldset>
  );
}

export default function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheint) : temperature;

  return (
    <div>
      <h2>Kalkulator Suhu (Lifting State Up)</h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <p>Suhu dalam Celsius: {celsius}</p>
      <p>Suhu dalam Fahrenheit: {fahrenheit}</p>
    </div>
  );
}
