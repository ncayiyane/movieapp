import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';


const UserProfile = () => {
    const { likedItems, dislikedItems, addedItems, currentlyPlaying } = useContext(MovieContext);
    const [userLikes, setUserLikes] = useState([]);

    useEffect(() => {
        setUserLikes(likedItems);
    }, [likedItems]);

    return (
        <div className="user-profile">
            <h2>Your Profile</h2>

            <div className="profile-section">
                <h3>Liked Items</h3>
                {userLikes.length === 0 ? (
                    <p className="empty-message">You haven't liked any items yet.</p>
                ) : (
                    <ul className="item-list">
                        {userLikes.map(item => (
                            <li key={item.id} className="item">
                                <img src={item.image} alt={item.title} className="item-image" />
                                <span className="item-title">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="profile-section">
                <h3>Disliked Items</h3>
                {dislikedItems.length === 0 ? (
                    <p className="empty-message">You haven't disliked any items yet.</p>
                ) : (
                    <ul className="item-list">
                        {dislikedItems.map(item => (
                            <li key={item.id} className="item">
                                <img src={item.image} alt={item.title} className="item-image" />
                                <span className="item-title">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="profile-section">
                <h3>Added Items</h3>
                {addedItems.length === 0 ? (
                    <p className="empty-message">You haven't added any items to your list yet.</p>
                ) : (
                    <ul className="item-list">
                        {addedItems.map(item => (
                            <li key={item.id} className="item">
                                <img src={item.image} alt={item.title} className="item-image" />
                                <span className="item-title">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="profile-section">
                <h3>Currently Playing</h3>
                {currentlyPlaying ? (
                    <p>Now playing: {currentlyPlaying.title}</p>
                ) : (
                    <p>No item is currently playing.</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
