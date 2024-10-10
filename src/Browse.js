import React, {useContext } from 'react';
import { browseData } from './data';
import { MovieContext } from './MovieContext';

const Browse = () => {
    const { likeItem, dislikeItem, addItem, playItem } = useContext(MovieContext);
    
    return (
        <div className="Browse">
            <h2>Browse</h2>
            <p>Explore a mix of movies, cartoons, and documentaries all in one place!</p>
            <div className="userprofile_grid">
                {browseData.map(browse => (
                    <div key={browse.id} className="grid_item">
                        <img className="grid_img" src={browse.image} alt={browse.title} />
                        <h2>{browse.title}</h2>
                        <p>{browse.genre}</p>
                        <div className="button_group">
                            <button onClick={() => likeItem(browse)}>👍</button>
                            <button onClick={() => dislikeItem(browse)}>👎</button>
                            <button onClick={() => playItem(browse)}>▶️</button>
                            <button onClick={() => addItem(browse)}>➕</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Browse;
