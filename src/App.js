import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';
import Documentaries from './Documentaries';
import Cartoons from './Cartoons';
import Browse from './Browse';
import Movies from './Movies';
import { MovieProvider } from './MovieContext'; // Import the MovieProvider

function App() {
  return (
    <MovieProvider> {/* Wrap the application in the MovieProvider */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/UserProfile' element={<UserProfile />} />
            <Route path='/Documentaries' element={<Documentaries />} />
            <Route path='/Cartoons' element={<Cartoons />} />
            <Route path='/Browse' element={<Browse />} />
            <Route path='/Movies' element={<Movies />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
