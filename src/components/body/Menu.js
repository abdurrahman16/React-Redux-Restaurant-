import { Component } from 'react';
import MenuItem from './MenuItem.js';
import DISHES from '../../data/Dishes.js';
import DishDetail from './DishDetail.js';
import COMMENTS from '../../data/comments.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      selectedDish: null
    };
  }

  onSelectDish = (dish) => {
    this.setState({ selectedDish: dish });
  };

  render() {
    const menu = this.state.dishes.map((dish) => (
      <MenuItem
        key={dish.id}
        dish={dish}
        onSelectDish={this.onSelectDish}
      />
    ));

    let dishDetail = null;

    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter(
        (comment) => comment.dishId === this.state.selectedDish.id
      );

      dishDetail = (
        <DishDetail
          dish={this.state.selectedDish}
          comments={comments}
        />
      );
    }

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

export default Menu;
