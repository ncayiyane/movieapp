import { Link, Routes, Route } from 'react-router-dom';
import Browse from './Browse';
import Movies from './Movies';
import Cartoons from './Cartoons';
import Documentaries from './Documentaries';

const Home = () => {
    // Define an array of routes and their corresponding display names
    const routes = [
        { path: 'browse', name: 'Browse', component: <Browse /> },
        { path: 'movies', name: 'Movies', component: <Movies /> },
        { path: 'cartoons', name: 'Cartoons', component: <Cartoons /> },
        { path: 'documentaries', name: 'Documentaries', component: <Documentaries /> },
    ];

    return (
        <div className="Home">
            <h2>Welcome To FavMovies</h2>
            
            <div className="Home_grid">
                {routes.map(({ path, name }) => (
                    <div className="Home_item" key={path}>
                        <Link to={`/${path}`}>
                            <h3>{name}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Routes for the Home component */}
            <Routes>
                {routes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))}
            </Routes>
        </div>
    );
};

export default Home;
