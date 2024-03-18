import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <h1>TripMDB</h1>
    <h2>Welcome to TripMDB!, your online trip forum for movie nerds!</h2>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default App
