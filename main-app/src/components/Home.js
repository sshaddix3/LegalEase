import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ClientList from "./ClientList";
import ClientListAttempt2 from "./ClientListAttempt2";
import FormV3 from "./FormV3";
import { Helmet } from "react-helmet";

const TITLE = "test title for all home comp";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      user: null,
      error: null,
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/account", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((parsedResponse) => {
        if (parsedResponse.error) {
          this.setState({
            error: parsedResponse.error,
            isLoading: false,
          });
          console.log("user not logged in");
        } else {
          this.setState({
            user: parsedResponse.user,
            isLoading: false,
          });
        }
      })
      .catch(() => {
        this.setState({
          error: "ERROR",
          isLoading: false,
        });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return <Redirect to="/login"></Redirect>;
    }

    return (
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="nav-bar-container">
          <div className="nav-bar-links-container">
            <div className="logo"></div>

            <Link to="/login" className="nav-bar-links">
              Login
            </Link>
            <Link to="/register" className="nav-bar-links">
              Register
            </Link>
            <Link to="/passwordreset" className="nav-bar-links">
              Forgot Password?
            </Link>
            <Link to="/home/formv3" className="nav-bar-links">
              Form
            </Link>
            <Link to="/home/clientlist" className="nav-bar-links">
              Clients
            </Link>
            <Link to="/home/clientlistattempt2" className="nav-bar-links">
              ClientListAttempt2
            </Link>
          </div>

          <div className="nav-bar-account">Hi {this.state.user.name}!</div>
        </div>

        <div>
          <Switch>
            <Route path="/home/formv3" exact>
              <FormV3 user={this.state.user}></FormV3>
            </Route>
          </Switch>
          <Switch>
            <Route path="/home/clientlist" exact>
              <ClientList user={this.state.user}></ClientList>
            </Route>
          </Switch>
          <Switch>
            <Route path="/home/clientlistattempt2" exact>
              <ClientListAttempt2 user={this.state.user}></ClientListAttempt2>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
