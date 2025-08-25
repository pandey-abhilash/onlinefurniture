import logo from './logo.svg';
import './App.css';
import RegisterPage from './authPages/registerPage';
import LoginPage from './authPages/loginPage';
import { Route, Routes } from "react-router-dom"


const AuthRouter = () => {
  return <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
  </Routes>
}

const AppRouter = () => {
  return <></>
}

function App() {
  return (
    <div className="App">
      <AuthRouter />
    </div>
  );
}

export default App;
