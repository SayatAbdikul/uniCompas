import Navbar from "./navbar/Navbar";
import RatingsBlock from "./ratingsBlock/ratingsBlock";
import './App.css';
import ListingBlock from "./listingBlock/listingBlock";
function App() {
  return (
    <div>
      <Navbar />
      <RatingsBlock />
        <ListingBlock />
    </div>
  );
}

export default App;
