import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating , setMovieRating] = useState(0);

  return(
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This is movie Rating {movieRating}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible','Bad','Good','Okay','Amazing']} />
    <StarRating size={30} color='red' className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);

