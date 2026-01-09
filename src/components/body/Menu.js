import MenuItem from './MenuItem.js';
import { Component } from 'react';
import DISHES from '../../data/Dishes.js';
import DishDetail from './DishDetail.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
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

    const dishDetail = this.state.selectedDish
      ? <DishDetail dish={this.state.selectedDish} />
      : null;

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
