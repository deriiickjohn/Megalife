import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Content from './components/Content';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
