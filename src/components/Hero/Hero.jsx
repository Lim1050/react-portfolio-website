import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building the Future, One Line of Code at a Time</h2>
        <p>
          Every line of code I write is a commitment to a better tomorrow.
          Together, we can create innovations that matter.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/React.png" alt="Tech Icon" />
          </div>
          <img src="./assets/images/me.png" alt="Tech Icon" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/laravel.png" alt="Tech Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/Postgresql.png" alt="Tech Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/python.png" alt="Tech Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
