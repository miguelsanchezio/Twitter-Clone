import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';
import { logout } from '../store/actions/auth';

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.onLogout;
  }

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
            {this.props.currentUser.isAuthenticated ? (
              <ul className="nav nav-navbar navbar-right">
                <li>
                  <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
                    New Message
                  </Link>
                </li>
                <li>
                  <a onClick={this.logout}>Logout</a>
                </li>
              </ul>
            ) : (
            <li>
              <Link to="/signin">Log In</Link>
            </li>
            )}
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

const mapDistachToProps = dispatch => {
  return {
    onLogout: () => {dispatch(logout())}
  }
}

export default connect(mapStateToProps, mapDistachToProps)(Navbar);