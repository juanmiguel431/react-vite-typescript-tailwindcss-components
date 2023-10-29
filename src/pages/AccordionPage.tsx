import { Section } from '../models';
import Accordion from '../components/Accordion.tsx';

const items: Section[] = [
  { id: 1, title: 'Section 1', content: 'Content 1' },
  { id: 2, title: 'Section 2', content: 'Content 2' },
  { id: 3, title: 'Section 3', content: 'Content 3' },
  { id: 4, title: 'Section 4', content: 'Content 4' },
]

const AccordionPage = () => {
  return (
    <Accordion items={items}/>
  );
};

export default AccordionPage;
