import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

function Test({ color }) {
  const [movieRaiting, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating color='blue' onSetRating={setMovieRating} />
      <p>This movie was rates {movieRaiting} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={5} />
    <Test />
  </React.StrictMode>
);

