import React from "react";

import "./App.css";
import Blog from "./Components/Blog/Blog";
import { Switch, Route, HashRouter } from "react-router-dom";
import Layout from "./Components/Menubar/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Aboutauthor from "./Components/About-Author/Aboutauthor";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Personal Page";  
  }, []);

  return (
    <div className="App">
      <HashRouter >
        <Layout />
        <Switch>
          <Route path="/blogs" exact component={Blog}></Route>
          <Route path="/" exact component={Aboutauthor}></Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
