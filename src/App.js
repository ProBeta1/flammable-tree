import "materialize-css/dist/css/materialize.min.css";
import React, { Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import CalmDown from "./pages/CalmDown/CalmDown";
import Home2 from "./pages/Home2/Home2";
import Home3 from "./pages/Home3/Home3";
import TellSecret1 from "./pages/TellSecret/TellSecret1";
import TellSecret2 from "./pages/TellSecret/TellSecret2";
import TellSecret3 from "./pages/TellSecret/TellSecret3";
// import Home from "./pages/home/home";

// import Logo from "./logo.png"

function App() {
  // const dispatch = useDispatch();
  // const [display, setDisplay] = React.useState("block");

  return (
    <Fragment>
      <div className="root navbar-fixed navbar-top">
        <nav className="white">
          <div class="nav-wrapper">
            {/* <Link to="/" class="brand-logo left">
              <img src={Logo}></img>
            </Link> */}
            <ul class="right">
              <li>
                {/* <Link
                  to="/"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Home
                </Link>
                <Link
                  to="/inventory"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Inventory
                </Link>
                <Link
                  to="/receipt"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Charitable Donation Receipt
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <Route exact path="/Home2" component={Home2}/>
        <Route exact path="/Home3" component={Home3}/>
        
        <Route exact path="/TellSecret1" component={TellSecret1}/>
        <Route exact path="/TellSecret2" component={TellSecret2}/>
        <Route exact path="/TellSecret3" component={TellSecret3}/>

        <Route exact path="/calmdown" component={CalmDown}/>

      </div>

      {/* <div className="navbar-fixed navbar-bottom navv">
        <nav className="black">
          <div class="nav-wrapper">
            <ul class="center">
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Site map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </Fragment>
  );
}

export default App;
