import { Component } from 'react';
import MenuItem from './MenuItem.js';
import DishDetail from './DishDetail.js';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actionCreators.js';


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment))
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      selectedDish: null
    };
  }

  onSelectDish = (dish) => {
    this.setState({ selectedDish: dish });
  };

  render() {
    const menu = this.props.dishes.map((dish) => (
      <MenuItem
        key={dish.id}
        dish={dish}
        onSelectDish={this.onSelectDish}
      />
    ));

    let dishDetail = null;

    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter(
        (comment) => comment.dishId === this.state.selectedDish.id
      );

      dishDetail = (
        <DishDetail
          dish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
        />
      );
    }
document.title = "Menu";
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">{menu}</div>
          <div className="col-7">{dishDetail}</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
