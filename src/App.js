import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from './redux/actions/categories';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.getAllCategories();
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="App">
        <header>Cabeçalho</header>
        <aside>
          <nav>
            <ul>
              {categories.map(category => (
                <li key={category.path}>{category.name}</li>
              ))}
            </ul>
          </nav>
        </aside>
        <section>posts</section>
      </div>
    );
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
