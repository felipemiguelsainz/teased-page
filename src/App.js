import Navbar from './Components/Navbar';
import Catalogue from './Components/Catalogue'
import Auth from './Components/Auth'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { UserContextProvider } from './Components/Context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Catalogue/>}/>
          <Route exact path='/Login' element={<Auth/>}/>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default (App);
