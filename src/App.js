import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Packages from './Packages'; 
import PackageDetails from './PackageDetails';
import Amenities from './Amenities';
import Forum from './Forum';
import ReviewForm from './ReviewForm';
import book from './book'; 
import Footer from './Footer';
import FAQ from './FAQ';


function App() {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/packages" exact component={Packages} />
            <Route path="/packages/:title" component={PackageDetails} />
            <Route path="/amenities" component={Amenities} />
            <Route path="/faq" component={FAQ} />
            <Route path="/forum">
              <Forum reviews={reviews} />
            </Route>
            <Route path="/review">
              <ReviewForm onSubmit={handleReviewSubmit} />
            </Route><Route path="/book" component={book} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
