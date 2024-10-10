import React, { useContext } from 'react';
import { movieData } from './data';
import { MovieContext } from './MovieContext';

const Movies = () => {
    const { likeItem, dislikeItem, addItem, playItem } = useContext(MovieContext);

    return (
        <div className="Movie">
            <h2>Movies</h2>
            <p>Explore</p>
            <div className="userprofile_grid">
                {movieData.map(movie => (
                    <div key={movie.id} className="grid_item">
                        <img className="grid_img" src={movie.image} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <div className="button_group">
                            <button onClick={() => likeItem(movie)}>👍</button>
                            <button onClick={() => dislikeItem(movie)}>👎</button>
                            <button onClick={() => playItem(movie)}>▶️</button>
                            <button onClick={() => addItem(movie)}>➕</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
