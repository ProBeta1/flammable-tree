import "materialize-css/dist/css/materialize.min.css";
import React, { Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link,Route } from "react-router-dom";
import "./App.css";
import CalmDown from "./pages/CalmDown/CalmDown";
import Home2 from "./pages/Home2/Home2";
import Home3 from "./pages/Home3/Home3";
import TellSecret1 from "./pages/TellSecret/TellSecret1";
import TellSecret2 from "./pages/TellSecret/TellSecret2";
import TellSecret3 from "./pages/TellSecret/TellSecret3";
import logo from "./pics/logo.png";
import ParticlesBg from 'particles-bg'

// import Home from "./pages/home/home";

// import Logo from "./logo.png"

function App() {
  // const dispatch = useDispatch();
  // const [display, setDisplay] = React.useState("block");

  return (
    <Fragment>
      <div className="root navbar-fixed navbar-top">
        <nav className="pink">
          <div class="nav-wrapper">
            {/* <Link to="/" class="brand-logo left">
              <img src={Logo}></img>
            </Link> */}
            <ul class="right">
              <li>
                <Link
                  to="/Home2"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Dump Your Anger
                </Link>
                <Link
                  to="/TellSecret1"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Share your secret
                </Link>
                <Link
                  to="/calmdown"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Calm Yourself Down
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bgd">
        <Route exact path="/Home2" component={Home2}/>
        <Route exact path="/Home3" component={Home3}/>
        
        <Route exact path="/TellSecret1" component={TellSecret1}/>
        <Route exact path="/TellSecret2" component={TellSecret2}/>
        <Route exact path="/TellSecret3" component={TellSecret3}/>

        <Route exact path="/calmdown" component={CalmDown}/>

        <img src={logo} className="logo" alt="logo" />
        <ParticlesBg type="lines" bg={true} />


      </div>

    </Fragment>
  );
}

export default App;
