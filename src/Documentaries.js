import React, { useContext } from 'react';
import { documentariesData } from './data';
import { MovieContext } from './MovieContext';

const Documentaries = () => {
    const { likeItem, dislikeItem, addItem, playItem } = useContext(MovieContext);

    return (
        <div className="Documentaries">
            <h2>Documentaries</h2>
            <div className="userprofile_grid">
                {documentariesData.map(documentaries => (
                    <div key={documentaries.id} className="grid_item">
                        <img className="grid_img" src={documentaries.image} alt={documentaries.title} />
                        <h2>{documentaries.title}</h2>
                        <p>{documentaries.genre}</p>
                        <div className="button_group">
                            <button onClick={() => likeItem(documentaries)}>👍</button>
                            <button onClick={() => dislikeItem(documentaries)}>👎</button>
                            <button onClick={() => playItem(documentaries)}>▶️</button>
                            <button onClick={() => addItem(documentaries)}>➕</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documentaries;
