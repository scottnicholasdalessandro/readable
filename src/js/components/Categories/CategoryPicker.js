import React, {Component} from 'react';
import {fetchCategories} from '../../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.handleCategory = this.handleCategory.bind(this);
  }

  state = {
    value: this.props.match.params.category
  };
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }
  handleCategory(e) {
    this.props.history.push(`/${e.target.value}`);
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div> <span>Select Category: </span>
        <select onChange={this.handleCategory} value={this.state.value}>
          {this.props.categories.map(category => (
            <option value={category.path} key={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

CategoryPicker.propTypes = {
  categories: PropTypes.array
};



const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
};


export default connect(mapStateToProps)(withRouter(CategoryPicker));
