import Navbar from "./navbar/Navbar";
import RatingsBlock from "./ratingsBlock/ratingsBlock";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListingBlock from "./listingBlock/listingBlock";
import Chat from "./chatBlock/Chat";
function App() {
  return (
    <div>
      <Navbar />
      <RatingsBlock />
        <ListingBlock />
        <Chat />
    </div>
  );
}

export default App;
