import './App.css';
import { Kanban } from './components/kanban/Kanban';
function App() {
  return (
    <div  style={{padding:'50px'}} className="App">
     <h1 style={{marginBottom:'30px'}}>kanban UI</h1>
    <Kanban/>
    </div>
  );
}

export default App;
