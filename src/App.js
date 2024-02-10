import logo from './logo.svg';
import './App.css';
import { TwitterPicker } from 'react-color';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["HTML", 11],
  ["JS", 25],
  ["CSS", 23],
  ["Watch Lectures", 20],
  ["Procrastination", 71],
];

export const options = {
  title: "Моя учёба в ITGirl School",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
