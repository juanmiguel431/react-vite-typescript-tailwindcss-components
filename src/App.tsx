import ButtonPage from './pages/ButtonPage.tsx';
import AccordionPage from './pages/AccordionPage.tsx';
import DropdownPage from './pages/DropdownPage.tsx';
import Route from './components/navigation/Route.tsx';
import Sidebar from './components/Sidebar.tsx';

function App() {

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/dropdown" component={DropdownPage}/>
        <Route path="/accordion" component={AccordionPage}/>
        <Route path="/buttons" component={ButtonPage}/>
      </div>
    </div>
  )
}

export default App
