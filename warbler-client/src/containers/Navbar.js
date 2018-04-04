import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Warbler"/>
          </Link>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Log In</Link>
            </li>
          </ul>
        </div>        
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(Navbar);