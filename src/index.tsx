import { createRoot } from "react-dom/client";
import { UserCard } from "./Greeting";
import { Button } from "./Button";

const root = createRoot(document.getElementById("root")!);

root.render(
  <>
    <UserCard
      name="Piero"
      age={25}
      amount={100}
      married={true}
      points={[1, 2, 3, 4, 5]}
      address={{ street: "Calle Falsa", number: 123 }}
      greet={(name: string) => {
        console.log(name);
      }}
    />

    <UserCard
      name="Juan"
      age={28}
      amount={200}
      married={false}
      points={[1, 2, 3, 4, 5]}
      address={{ street: "Calle Falsa", number: 456 }}
      greet={(name: string) => {
        console.log(name);
      }}
    />

    <Button />
  </>
);
