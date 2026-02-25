import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

const user = [
  {
    id: 1,
    name: "Rayan",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Piero",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Juan",
    image: "https://robohash.org/user3",
  },
  {
    id: 4,
    name: "Maria",
    image: "https://robohash.org/user4",
  },
  {
    id: 5,
    name: "Pedro",
    image: "https://robohash.org/user5",
  },
];

root.render(
  <>
    {user.map((user, index) => (
      <div key={index}>
        <h1>{user.name}</h1>
        <img src={user.image} alt={user.name} />
      </div>
    ))}
  </>,
);
