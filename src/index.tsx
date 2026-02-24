import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root')!);

function Greeting() {
  return (
    <h1>Hola mundo</h1>
  )
}

root.render(
  <Greeting />
);
