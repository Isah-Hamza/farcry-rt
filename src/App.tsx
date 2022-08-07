import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages';
import Services from './pages/Services';
import Emergency from './pages/Emergency';
import DetailedReporting from './pages/DetailedReporting';
import Login from './pages/Login';
import Register from './pages/Register';
import Prevention from './pages/Prevention';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';
import FAQ from './pages/FAQ';
import Support from './pages/Support';


function App() {
  return ( 
    <div className="App flex flex-col">
      <Router>
        <Header />
        <main className=' mt-20'>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/services' element={<Services />} />
            <Route path='/report/emergency' element={<Emergency />} />
            <Route path='/report/detailed-reporting' element={<DetailedReporting />} />
            <Route path='/report/faq' element={<FAQ />} />
            <Route path='/report/support' element={<Support />} />
            <Route path='/prevention' element={<Prevention />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/donate' element={<Donate />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
