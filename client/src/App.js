
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/register' element={<Register />}/>
     <Route path='/login' element={<Login/>}/>
    </Routes>
  
 
    </BrowserRouter>
    </div>
  );
}

export default App;
