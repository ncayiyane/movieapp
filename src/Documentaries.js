import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsDown, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
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
                        <button onClick={() => likeItem(documentaries)}>
                                <FontAwesomeIcon icon={faHeart} className="icon-like" /> Like
                            </button>
                            <button onClick={() => dislikeItem(documentaries)}>
                                <FontAwesomeIcon icon={faThumbsDown} className="icon-dislike" /> Dislike
                            </button>
                            <button onClick={() => playItem(documentaries)}>
                                <FontAwesomeIcon icon={faPlay} className="icon-play" /> Play
                            </button>
                            <button onClick={() => addItem(documentaries)}>
                                <FontAwesomeIcon icon={faPlus} className="icon-add" /> Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documentaries;
