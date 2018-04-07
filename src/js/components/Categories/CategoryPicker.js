import React, {Component} from 'react';
import {fetchCategories} from '../../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.handleCategory = this.handleCategory.bind(this);
    this.state = {
      value: this.props.match.params.category
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    
  }
  handleCategory(e) {
    this.props.history.push(`/${e.target.value}`);
    this.setState({value: e.target.value});
  }
  render() {
    
    return (
      <div>
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

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(withRouter(CategoryPicker));
