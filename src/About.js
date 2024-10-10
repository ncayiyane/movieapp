import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = "About";
    }, []);
    
    return ( 
        <div className="about-container">
            <nav className="about-links">
                <Link to="/">Home</Link>
                <Link to="/UserProfile">User Profile</Link>
            </nav>
            <h1 className="about-title">About Us</h1>
            <p className="about-intro">Welcome to <strong>FavMovies</strong>, a vibrant hub where stories come to life! Our mission is to share and celebrate the beauty of the world through movies, cartoons, and documentaries.</p>

            <h2 className="about-subtitle">Our Vision</h2>
            <p className="about-text">We envision a world where everyone can explore a rich tapestry of narratives that not only entertain but also educate and inspire. From the laughter of beloved cartoons to the thrill of cinematic masterpieces and the enlightening insights of documentaries, we curate a collection that celebrates the beauty of human creativity.</p>

            <h2 className="about-subtitle">What We Offer</h2>
            <ul className="about-list">
                <li><strong>Cartoons</strong>: Dive into a colorful universe filled with heartwarming tales and unforgettable characters.</li>
                <li><strong>Movies</strong>: Experience the power of cinema with our extensive library of films.</li>
                <li><strong>Documentaries</strong>: Expand your horizons with our thought-provoking documentaries.</li>
            </ul>

            <h2 className="about-subtitle">Join Us on This Journey</h2>
            <p className="about-text">We invite you to join our community of fellow explorers who share a passion for stories. Thank you for being a part of our journey. Let’s embark on this adventure together! </p>
        </div>
    );
}
 
export default About;
