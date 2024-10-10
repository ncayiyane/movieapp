import React, { createContext, useState, useEffect } from 'react';
// import { Data } from './data'; // Import the data from data.js

// Create the context
export const MovieContext = createContext();

// Create the provider component
export const MovieProvider = ({ children }) => {
    const [likedItems, setLikedItems] = useState([]);
    const [dislikedItems, setDislikedItems] = useState([]);
    const [addedItems, setAddedItems] = useState([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

    // Load liked items, disliked items, and added items from local storage on mount
    useEffect(() => {
        const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        const storedDislikedItems = JSON.parse(localStorage.getItem('dislikedItems')) || [];
        const storedAddedItems = JSON.parse(localStorage.getItem('addedItems')) || [];

        setLikedItems(storedLikedItems);
        setDislikedItems(storedDislikedItems);
        setAddedItems(storedAddedItems);
    }, []);

    // Save liked items to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }, [likedItems]);

    // Save disliked items to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('dislikedItems', JSON.stringify(dislikedItems));
    }, [dislikedItems]);

    // Save added items to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('addedItems', JSON.stringify(addedItems));
    }, [addedItems]);

    // Function to handle liking an item
    const likeItem = (item) => {
        setLikedItems((prevLikedItems) => {
            if (!prevLikedItems.some((liked) => liked.id === item.id)) {
                return [...prevLikedItems, item];
            }
            return prevLikedItems;
        });
        setDislikedItems((prevDislikedItems) => prevDislikedItems.filter((disliked) => disliked.id !== item.id));
    };

    // Function to handle disliking an item
    const dislikeItem = (item) => {
        setDislikedItems((prevDislikedItems) => {
            if (!prevDislikedItems.some((disliked) => disliked.id === item.id)) {
                return [...prevDislikedItems, item];
            }
            return prevDislikedItems;
        });
        setLikedItems((prevLikedItems) => prevLikedItems.filter((liked) => liked.id !== item.id));
    };

    // Function to handle adding an item to a list
    const addItem = (item) => {
        setAddedItems((prevAddedItems) => {
            if (!prevAddedItems.some((added) => added.id === item.id)) {
                return [...prevAddedItems, item];
            }
            return prevAddedItems;
        });
    };

    // Function to handle playing an item
    const playItem = (item) => {
        setCurrentlyPlaying(item);
        alert(`Now playing: ${item.title}`);
    };

    return (
        <MovieContext.Provider value={{ likedItems, likeItem, dislikedItems, dislikeItem, addedItems, addItem, currentlyPlaying, playItem }}>
            {children}
        </MovieContext.Provider>
    );
};
