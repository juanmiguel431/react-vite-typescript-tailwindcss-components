import Accordion from './components/Accordion.tsx';
import { Section } from './models';

const items: Section[] = [
  { id: 1, title: 'Section 1', content: 'Content 1' },
  { id: 2, title: 'Section 2', content: 'Content 2' },
  { id: 3, title: 'Section 3', content: 'Content 3' },
  { id: 4, title: 'Section 4', content: 'Content 4' },
]

function App() {
  return (
    <Accordion items={items} />
  )
}

export default App
