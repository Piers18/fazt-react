import { createRoot } from 'react-dom/client'
import { Greeting } from './Greeting'

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <Greeting value="1" />
    <Greeting value="2" />
    <Greeting value="3" />
    <Greeting value="4" />
  </>
);
