import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCQ7L8IcNsJLOd6HevsDX4n8VuwcCDuUuA"

// Create a new component, this component will produce HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
}

// Take this HTML and put it on the the page in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
