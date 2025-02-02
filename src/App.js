import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
