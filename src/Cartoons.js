import React, { useContext } from 'react';
import { cartoonData } from './data';
import { MovieContext } from './MovieContext';

const Cartoons = () => {
    const { likeItem, dislikeItem, addItem, playItem } = useContext(MovieContext);

    return (
        <div className="Cartoons">
            <h2>Cartoons</h2>
            <p>Explore</p>
            <div className="userprofile_grid">
                {cartoonData.map(cartoon => (
                    <div key={cartoon.id} className="grid_item">
                        <img className="grid_img" src={cartoon.image} alt={cartoon.title} />
                        <h2>{cartoon.title}</h2>
                        <p>{cartoon.genre}</p>
                        <div className="button_group">
                            <button onClick={() => likeItem(cartoon)}>👍</button>
                            <button onClick={() => dislikeItem(cartoon)}>👎</button>
                            <button onClick={() => playItem(cartoon)}>▶️</button>
                            <button onClick={() => addItem(cartoon)}>➕</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cartoons;
