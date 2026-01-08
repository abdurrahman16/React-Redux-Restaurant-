import MenuItem from './MenuItem.js';
import { useState } from 'react';
import DISHES from '../../data/Dishes.js';
import DishDetail from './DishDetail.js';

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onSelectDish = (dish) => {
    setSelectedDish(dish);
  };

  const menu = dishes.map((dish) => (
    <MenuItem
      key={dish.id}
      dish={dish}
      onSelectDish={onSelectDish}
    />
  ));

  const dishDetail = selectedDish
    ? <DishDetail dish={selectedDish} />
    : null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">{menu}</div>
        <div className="col-7">{dishDetail}</div>
      </div>
    </div>
  );
};

export default Menu;
