export function Button({ text }: { text: string }) {
  return <button onClick={() => alert("hola")}>{text}</button>;
}
