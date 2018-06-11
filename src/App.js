import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from './redux/actions/categories';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.getAllCategories();
  };

  render() {
    return <div className="App">a</div>;
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(getAllCategories());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
