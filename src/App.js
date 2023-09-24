import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuHeader from './Components/MenuHeader';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
