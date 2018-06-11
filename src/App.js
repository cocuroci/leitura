import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from './redux/actions/categories';
import { getAllPosts } from './redux/actions/posts';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.getAllCategories();
    this.props.getAllPosts();
  };

  render() {
    const { categories, posts } = this.props;

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
        <section>
          {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    categories: categories.categories,
    posts: posts.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(getAllCategories());
    },
    getAllPosts: () => {
      dispatch(getAllPosts());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
