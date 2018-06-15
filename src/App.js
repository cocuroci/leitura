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

  formatterDate = timestamp => {
    return new Date(timestamp).toDateString();
  };

  render() {
    const { categories, posts } = this.props;

    return (
      <div className="App">
        <header>
          <h1>Cabeçalho</h1>
        </header>
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
          {posts.map(post => (
            <div key={post.id}>
              <div>
                <div>
                  {this.formatterDate(post.timestamp)}
                  {post.author}
                </div>
                <div>
                  {post.category}
                  {post.voteScore}
                </div>
              </div>
              <h2>{post.title}</h2>
              {post.body}
            </div>
          ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    categories: categories,
    posts: posts,
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
