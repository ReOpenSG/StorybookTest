import { useState } from "react";
import "./styles/tailwind.css";
import Submit from "./components/Submit/Submit";

function App() {
  const [number, setNumber] = useState(0);
  const onClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <Submit
        number={number}
        onClick={onClick}
        type="button"
        color="bg-lime-300"
        children="나는 버튼이에요"
        size="text-base"
      />
    </>
  );
}

export default App;
