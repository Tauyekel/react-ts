import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contacts} from "./pages/Contacts";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Contacts} path="/contacts" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
