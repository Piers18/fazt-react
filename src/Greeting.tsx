export function Greeting(props: { value: string }) {
  return (
    <div>
      <h1>Greeting {props.value}</h1>
    </div>
  );
}

export function UserCard({
  name,
  age,
  amount,
  married,
  points,
  address,
  greet,
}: {
  name: string;
  age: number;
  amount: number;
  married: boolean;
  points: number[];
  address: { street: string; number: number };
  greet: (name: string) => void;
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{married ? "Casado" : "Soltero"}</p>
      <ul>
        <p>{address.street}</p>
        <p>{address.number}</p>
      </ul>
      <button onClick={() => greet(name)}>Greet</button>
    </div>
  );
}
