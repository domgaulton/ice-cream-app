import React from 'react';
import loadingGif from './icecream-loading.gif'; // Tell webpack this JS file uses this image


function Loading() {
  return (
    <div className="loading">
      <img src={loadingGif} alt="Loading"/>
    </div>
  );
}

export default Loading;
