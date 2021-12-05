import React, { useState } from "react";
import "./styles.css";

var Movies = {
  Romantic: [
    { movie: "Aashiqi 2", rating: " rating 4/5" },
    { movie: "sanam re", rating: "rating: 5/5" },
    { movie: "kasoor", rating: "rating:5/5" },
    { movie: "Love", rating: "rating: 2/5" }
  ],
  Comedy: [
    { movie: "Dhamal", rating: "rating: 4/5" },
    { movie: "Tees Maar Khan", rating: "rating: 3/5" },
    { movie: "Golmal Returns", rating: "rating: 2/5" },
    { movie: "Coolie no.1", rating: "rating: 5/5" }
  ],
  Hororr: [
    { movie: "Raaz", rating: "rating: 4/5" },
    { movie: "1920 London", rating: "rating: 3/5" },
    { movie: " Ghost", rating: "rating: 5/5" },
    { movie: "Lupt", rating: "rating: 3/5 " }
  ],
  Thriller: [
    { movie: "Kahani", rating: " rating: 2/5" },
    { movie: "Drishyam", rating: " rating:5/5" },
    { movie: "Race", rating: "rating:4/5" },
    { movie: "Badla", rating: "3/5" },
    { movie: "A wednesday", rating: "2/5" }
  ]
};

var movieknow = Object.keys(Movies);

export default function App() {
  const [movie, setmovie] = useState("Romantic");
  function genreClickHandler(genre) {
    setmovie(genre);
  }
  return (
    <div className="App">
      <h1>🎥Bollywood-Hangama🎥</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Movies. Select a Actor to get started...{" "}
      </p>

      <div>
        {movieknow.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingBlock: "0" }}>
          {Movies[movie].map((bollywood) => (
            <li
              key={bollywood}
              style={{
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {bollywood.movie} </div>
              <div style={{ fontSize: "smallj" }}> {bollywood.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
