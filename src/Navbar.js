
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>FavMovies</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/UserProfile">UserProfile</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;