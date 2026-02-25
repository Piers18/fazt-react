import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

const root = createRoot(document.getElementById("root")!);

function Counter() {
  const [mensaje, setMensaje] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setMensaje(e.target.value)} />
        <button onClick={() => alert("El mensaje es: " + mensaje)}>Save</button>
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <p>{counter}</p>
      </div>
    </>
  );
}

root.render(<Counter />);
