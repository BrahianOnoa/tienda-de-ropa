
import "./button.css";
import { useState, useEffect } from "react";

export default function Button(props) {
  const [colorBtn, setColorBtn] = useState({
    backgroundColor: props.color,
  });

  console.log();

  useEffect(() => {
    console.log("componente");
  }, []);

  useEffect(() => {
    console.log();
  }, [colorBtn]);

  function handleClick() {
    setColorBtn({ backgroundColor: "rgb(255, 70, 50)" });
    
  }

  return (
    <button onClick={handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  );
}