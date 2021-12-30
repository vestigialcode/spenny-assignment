import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import GlobalStyle from "./globalStyles";

import FlickrImages from "./pages/FlickrImages/FlickrImages";

import Footer from "./components/Footer/Footer";

import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <ScrollToTop />
       <Switch>
      
        <Route path="/" exact component={FlickrImages} />
        
       
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
