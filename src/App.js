import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuHeader from './Components/MenuHeader';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import LoginOwnerPage from './Pages/LoginOwnerPage';
import RegisterOwnerPage from './Pages/RegisterOwnerPage';
import AdminPage from './Pages/AdminPage';
import ModalTemplate from './Template/ModalTemplate';

function App() {
  return (
    <div>
      <ModalTemplate/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/loginowner' element={<LoginOwnerPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/registerowner' element={<RegisterOwnerPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
