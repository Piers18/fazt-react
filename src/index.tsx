import { createRoot } from "react-dom/client";
import { TaskCard } from "./Task";
import { Button } from "./Button";

const root = createRoot(document.getElementById("root")!);

root.render(
  <>
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <Button text="Click me" />
    <input type="text" onChange={(e) => console.log(e.target.value)} />
  </>
);
