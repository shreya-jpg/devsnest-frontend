import "./index.css";
import { useState } from "react";
import CalCard from "./components/CalCard";
export default function App() {
  const [data, setData] = useState([
    {
      id: 0,
      calory: 56,
      food: "Pizza"
    },
    {
      id: 1,
      calory: 69,
      food: "Burger"
    },
    {
      id: 2,
      calory: 500,
      food: "Coke"
    },
    {
      id: 3,
      calory: 180,
      food: "Browne"
    },
    {
      id: 4,
      calory: 200,
      food: "Fried Rice"
    },
    {
      id: 5,
      calory: 600,
      food: "Lassania"
    },
    {
      id: 6,
      calory: 10,
      food: "Pani Puri"
    }
  ]);
  return (
    <div className="App">
      <h1>Calorie Read Only</h1>

      <div className="cal-app-container">
        {data.length ? (
          data.map(({ calory, food, id }) => (
            <CalCard
              key={id}
              calory={calory}
              data={data}
              setData={setData}
              food={food}
              id={id}
            />
          ))
        ) : (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            no entry
          </h1>
        )}
      </div>
    </div>
  );
}