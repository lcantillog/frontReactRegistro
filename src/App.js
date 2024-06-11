import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import RegisterHrs from './components/register-hrs';
import Home from './components/home';
import NavBase from './components/nav-base';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterTask from './components/register-task';
import Login from './components/login';
import People from './components/people';
import ConsultaHrs from './components/consulta-hrs';
import ConsultaTask from './components/consulta-task';
import ConsultaPeople from './components/consulta-people';
function App() {
  return (
    <div className="App">
     <NavBase/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/registro/horas' element={<RegisterHrs/>}></Route>
            <Route path='/registro/tarea' element={<RegisterTask/>}></Route>
            <Route path='/registro/persona' element={<People/>}></Route>
              
            <Route path='/consulta/horas' element={<ConsultaHrs/>}></Route>
            <Route path='/consulta/tarea' element={<ConsultaTask/>}></Route>
            <Route path='/consulta/usuario' element={<ConsultaPeople/>}></Route>

            <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
