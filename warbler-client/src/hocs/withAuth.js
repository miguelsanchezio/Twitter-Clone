import React, { Component } from 'react';
import { connect } from 'react-redux';

export const withAuth = componentToBeRendered => {
  class Authenticate extends Component {
    componentWillMount() {
      if(this.props.isAuthenticated === false) {
        this.props.history.push('/signin');
      }
    }
    componentWillUpdate(nextProps) {
      if(this.nextProps.isAuthenticated === false) {
        this.props.history.push('/signin');
      }
    }
    render() {
      return <componentToBeRendered {...this.props}/>;
    }
  }
  
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    }
  }
  
  return connect(mapStateToProps)(Authenticate);
}

