import {connect} from 'react-redux';
import PostList from '../PostList';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostList);