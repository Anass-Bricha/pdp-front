import './App.scss';
import {Routes} from "react-router-dom"
import { Route } from 'react-router-dom';
import Layout from './components/layout';
import Facture from './components/Facture';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='nouvelleFacture' element={<Facture/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
